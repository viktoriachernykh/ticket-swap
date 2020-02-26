import React from "react";

export default function EventDetails(props) {
  return (
    <div>
      {props.event && (
        <div>
          <p>Title: {props.event.title}</p>
          <p>Description: {props.event.description}</p>
          <p>
            Date: {props.event.startDate} - {props.event.endDate}
          </p>
          <p>Event created by: {props.author.name}</p>
          {/* <img src={props.event.picture} alt="event picture" /> */}
        </div>
      )}
      {!props.event && "Loading event"}
    </div>
  );
}
