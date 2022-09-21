import { MongoClient, ServerApiVersion } from 'mongodb';

let indexesCreated = false;
async function createIndexes(client) {
    if (indexesCreated) return client;
    const db = client.db();
    await Promise.all([
        db
            .collection(process.env.EMAILS_COLLECTION)
            .createIndex({ hash: 1 })
    ]);
    indexesCreated = true;
    return client;
}

export async function getMongoClient() {
    /**
     * Global is used here to maintain a cached connection across hot reloads
     * in development. This prevents connections growing exponentiatlly
     * during API Route usage.
     * https://github.com/vercel/next.js/pull/17666
     */
    if (!global.mongoClientPromise) {
        const client = new MongoClient(process.env.MONGODB_URI, {
            // @ts-ignore
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1
        });
        // client.connect() returns an instance of MongoClient when resolved
        global.mongoClientPromise = client
            .connect()
            .then((client) => createIndexes(client));
    }
    return global.mongoClientPromise;
}

export async function getMongoDb() {
    const mongoClient = await getMongoClient();
    return mongoClient.db();
}
