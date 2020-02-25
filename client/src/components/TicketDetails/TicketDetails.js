import React from "react";

export default function TicketDetails(props) {
  return (
    <div>
      {props.ticket && (
        <div>
          Ticket details
          <h1>Ticket: {props.ticket.title}</h1>
          <h2>Price: {props.ticket.price}</h2>
          <p>Description: {props.ticket.description}</p>
          {/* <img src={props.ticket.picture} alt="ticket picture" /> */}
        </div>
      )}
      {!props.ticket && "Loading ticket"}
    </div>
  );
}
