import { getMongoDb } from '../../server/mongodb';

export default async function handler(req, res) {
    const db = await getMongoDb();
    const totalEmails = await db.collection(process.env.EMAILS_COLLECTION).count();

    res.status(200).json({ count: totalEmails })
}
