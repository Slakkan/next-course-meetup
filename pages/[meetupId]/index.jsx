import { MongoClient, ObjectId } from "mongodb"
import Head from "next/head"

import MeetupDetails from "../../components/meetups/MeetupDetails"

function MeetupDetailsPage(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta
                    name="description"
                    content={props.description}
                />
            </Head>
            <MeetupDetails
                image={props.image}
                title={props.title}
                address={props.address}
                description={props.description}
            />
        </>
    )
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId

    const { DB_USER, DB_PASS } = process.env
    const client = await MongoClient.connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@nextcourse.x3ckz.mongodb.net/main?retryWrites=true&w=majority`
    )
    const db = client.db()
    const meetupsCollection = db.collection("meetups")

    const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })
    meetup._id = meetup._id.toString()

    client.close()
    return {
        props: {
            ...meetup,
        },
    }
}

export async function getStaticPaths() {
    const { DB_USER, DB_PASS } = process.env
    const client = await MongoClient.connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@nextcourse.x3ckz.mongodb.net/main?retryWrites=true&w=majority`
    )
    const db = client.db()
    const meetupsCollection = db.collection("meetups")

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

    client.close()

    return {
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
        fallback: false,
    }
}

export default MeetupDetailsPage
