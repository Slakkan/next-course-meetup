import Image from "next/image";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage() {
  return (
    <>
      <MeetupDetails
        image="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
        title="Wow such meetup"
        address="Dogehaus 123"
        description="Much good"
      />
    </>
  );
}

export default MeetupDetailsPage;
