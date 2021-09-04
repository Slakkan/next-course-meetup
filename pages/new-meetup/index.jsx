import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import Head from "next/head"

function NewMeetupPage() {
    const router = useRouter()

    async function addMeetupHandler(meetup) {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(meetup),
            headers: {
                "Content-Type": "application/json",
            },
        })

        const data = await response.json()
        router.push("/")
    }

    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Create your own meme meetups, such networking much wow!"
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default NewMeetupPage
