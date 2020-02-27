import React from "react";
import { Link } from "react-router-dom";

export default function TicketDetails(props) {
  // console.log(props);
  const start = new Date(props.event.startDate);
  const startDate = start.toLocaleDateString();
  const end = new Date(props.event.endDate);
  const endDate = end.toLocaleDateString();
  return (
    <div>
      {props.ticket && (
        <div>
          {/* <h3>Ticket details</h3> */}
          <p>
            Ticket for event:{" "}
            <Link to={`/event/${props.event.id}`} key={props.event.id}>
              {props.event.title}, {startDate}-{endDate}{" "}
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
