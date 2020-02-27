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
          {props.event.picture ? (
            <img src={props.event.picture} alt="event" />
          ) : (
            <img src={`/img/a${props.event.id}.jpeg`} alt="event" />
          )}
          <h2>{props.event.title}</h2>
          <p>{props.event.description}</p>
          <p>
            {startDate} - {endDate}
          </p>
          <em>Created by: {props.author.name}</em>
        </div>
      )}
    </div>
  );
}
