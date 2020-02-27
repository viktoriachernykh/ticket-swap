import React from "react";

export default function EventDetails(props) {
  const start = new Date(props.event.startDate);
  const startDate = start.toLocaleDateString();
  const end = new Date(props.event.endDate);
  const endDate = end.toLocaleDateString();

  return (
    <div>
      {props.event && (
        <div>
          <p>Title: {props.event.title}</p>
          <p>Description: {props.event.description}</p>
          <p>
            Date: {startDate} - {endDate}
          </p>
          <p>Event created by: {props.author.name}</p>
          {/* <img src={props.event.picture} alt="event picture" /> */}
        </div>
      )}
      {!props.event && "Loading event"}
    </div>
  );
}
