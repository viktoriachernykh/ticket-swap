import React from "react";
import { Link } from "react-router-dom";

export default function EventsList(props) {
  const eventsList = props.events
    ? props.events.map(event => {
        const start = new Date(event.startDate);
        const startDate = start.toLocaleDateString();
        const end = new Date(event.endDate);
        const endDate = end.toLocaleDateString();
        return (
          <Link to={`/event/${event.id}`} key={event.id}>
            <li>
              {event.title}, {event.description}, {startDate} - {endDate}
            </li>
          </Link>
        );
      })
    : "Loading events";

  return (
    <div>
      <h1>Events List</h1>
      <ul>{eventsList}</ul>
    </div>
  );
}
