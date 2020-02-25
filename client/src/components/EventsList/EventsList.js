import React from "react";
import { Link } from "react-router-dom";

export default function EventsList(props) {
  // console.log("props?", props);
  const eventList = props.events
    ? props.events.map(event => (
        <Link to={`/event/${event.id}`} key={event.id}>
          <li>
            <p>{event.title}</p>
            <p>{event.description}</p>
            {event.startDate} - {event.endDate}
          </li>
        </Link>
      ))
    : "Loading events";

  return (
    <div>
      <h1>Event List</h1>
      <ul>{eventList}</ul>
      {/* <AddEventForm /> */}
    </div>
  );
}