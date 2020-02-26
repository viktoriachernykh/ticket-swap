import React from "react";

export default function TicketDetails(props) {
  return (
    <div>
      {props.ticket && (
        <div>
          {/* <h3>Ticket details</h3> */}
          <p>
            Ticket for event: {props.event.title}, {props.event.startDate}-
            {props.event.endDate}
          </p>
          <p>Posted by {props.author.name}</p>

          <p>Ticket Description: {props.ticket.description}</p>
          <h2>Price: {props.ticket.price}</h2>
          {/* <img src={props.ticket.picture} alt="ticket picture" /> */}
          {/* <h2>
            Risk: We calculated that the risk of this ticket being a fraud is
            XX%
          </h2> */}
        </div>
      )}
      {!props.ticket && "Loading ticket"}
    </div>
  );
}
