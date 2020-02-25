import React from "react";

export default function EventDetails(props) {
  return (
    <div>
      {props.event && (
        <div>
          Event Details Page
          <h1>Event: {props.event.title}</h1>
          <p>Description: {props.event.description}</p>
          <p>
            Date: {props.event.startDate} - {props.event.endDate}
          </p>
          {/* <img src={props.event.picture} alt="event picture" /> */}
        </div>
      )}
      {!props.event && "Loading event"}
    </div>
  );
}
