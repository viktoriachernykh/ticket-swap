import React from "react";
import { Link } from "react-router-dom";

export default function EventsList(props) {
  const eventsList =
    props.events &&
    props.events.map(event => {
      const start = new Date(event.startDate);
      const startDate = start.toLocaleDateString();
      const end = new Date(event.endDate);
      const endDate = end.toLocaleDateString();
      return (
        <Link to={`/event/${event.id}`} key={event.id} className="eventLink">
          <img src={`/img/a${event.id}.jpg`} alt="event" />
          <br />
          {event.title} <br />
          {startDate} - {endDate}
          <br />
          {event.description}
        </Link>
      );
    });

  return (
    <div>
      <ul>{eventsList}</ul>
    </div>
  );
}
