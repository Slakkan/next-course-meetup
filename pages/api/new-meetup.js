import { MongoClient } from "mongodb"



async function handler(req, res) {
    if (req.method === "POST") {

        const data = req.body

        const { DB_USER, DB_PASS } = process.env
        const client = await MongoClient.connect(
            `mongodb+srv://${DB_USER}:${DB_PASS}@nextcourse.x3ckz.mongodb.net/main?retryWrites=true&w=majority`
        )
        const db = client.db()
        const meetupsCollection = db.collection("meetups")

        const result = await meetupsCollection.insertOne(data)

        client.close()
        res.status(201).json({ message: "Meetup inserted!" }) 
    }
}

export default handler
