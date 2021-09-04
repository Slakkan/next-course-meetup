import MeetupList from "../components/meetups/MeetupList"

const MOCK_MEETUPS = [
    {
        id: 'm1',
        title: 'Wow such meetup',
        image: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
        address: 'Dogehaus 123',
        description: 'Much good'
    },
    {
        id: 'm2',
        title: 'Sad Pepe',
        image: 'https://i.kym-cdn.com/entries/icons/original/000/017/618/pepefroggie.jpg',
        address: 'The friend zone',
        description: 'So sad bros'
    }
]

function HomePage () {
    return <MeetupList meetups={MOCK_MEETUPS} />
}

export default HomePage