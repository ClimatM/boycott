import crypto from 'crypto';
import { getMongoDb } from '../../server/mongodb';

export default async function handler(req, res) {
    const body = req.body;

    if (!body.email) {
        return res.status(400).json({ data: 'First or last name not found' })
    }

    const hash = crypto.createHash('sha256').update(body.email).digest('hex');
    const db = await getMongoDb();
    const collection = db.collection(process.env.EMAILS_COLLECTION);
    const hashAlreadySaved = await collection.findOne({
        hash
    });

    if (hashAlreadySaved) {
        return res.status(400).json({ error: 'email already exists' })
    } else {
        await collection.insertOne({
            hash
        });
        const total = await collection.count();

        res.status(200).json({ success: true, total });
    }
}
