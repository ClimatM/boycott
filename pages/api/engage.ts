import crypto from 'crypto';
import { getMongoDb } from '../../server/mongodb';

export default async function handler(req, res) {
    const body = req.body;
    const reEmail = /\S+@\S+\.\S+/;

    if (!body.email || !reEmail.test(body.email)) {
        return res.status(400).json({ error: 'wrong_email' })
    }

    const hash = crypto.createHash('sha256').update(body.email).digest('hex');
    const db = await getMongoDb();
    const collection = db.collection(process.env.EMAILS_COLLECTION);
    const hashAlreadySaved = await collection.findOne({
        hash
    });

    if (hashAlreadySaved) {
        return res.status(400).json({ error: 'email_exists' })
    } else {
        await collection.insertOne({
            hash
        });
        const total = await collection.count();

        res.status(200).json({ success: true, total });
    }
}
