import React from "react";
import { Link } from "react-router-dom";

export default function TicketDetails(props) {
  // console.log(props);

  return (
    <div>
      {props.ticket && (
        <div>
          {/* <h3>Ticket details</h3> */}
          <p>
            Ticket for event:{" "}
            <Link to={`/event/${props.event.id}`} key={props.event.id}>
              {props.event.title}, {props.event.startDate}-{props.event.endDate}{" "}
            </Link>
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
