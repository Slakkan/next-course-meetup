import Image from "next/image";

import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  return (
      <section className={classes.detail}>
          <Image
        src={props.image}
        alt={props.title}
        width="1024"
        height="720"
        layout="responsive"
      />
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
      </section>
  );
}

export default MeetupDetails;
