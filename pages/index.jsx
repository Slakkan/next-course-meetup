import { MongoClient } from "mongodb"
import Head from "next/head"

import MeetupList from "../components/meetups/MeetupList"

function HomePage(props) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="The biggest memestic site for react meetups"
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

export async function getStaticProps() {
    const { DB_USER, DB_PASS } = process.env
    const client = await MongoClient.connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@nextcourse.x3ckz.mongodb.net/main?retryWrites=true&w=majority`
    )
    const db = client.db()
    const meetupsCollection = db.collection("meetups")

    const meetups = await (
        await meetupsCollection.find().toArray()
    ).map((meetup) => {
        const { title, address, image, description } = meetup
        const id = meetup._id.toString()
        return {
            title,
            address,
            image,
            description,
            id,
        }
    })

    client.close()

    return {
        props: {
            meetups,
        },
    }
}

export default HomePage
