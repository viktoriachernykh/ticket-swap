import React from "react";

export default function EventsList(props) {
  // console.log("props?", props);
  const eventList = props.events
    ? props.events.map(event => (
        <li key={event.id}>
          <p>{event.title}</p>
          <p>{event.description}</p>
          {event.startDate} - {event.endDate}
        </li>
      ))
    : "Loading events";

  return (
    <div>
      Event List
      <ul>{eventList}</ul>
    </div>
  );
}
