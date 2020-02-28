import React from "react";
import { Link } from "react-router-dom";

export default function TicketDetails(props) {
  const start = new Date(props.event.startDate);
  const startDate = start.toLocaleDateString();
  const end = new Date(props.event.endDate);
  const endDate = end.toLocaleDateString();
  return (
    <div>
      {props.ticket && (
        <div>
          <p>
            Ticket for event:{" "}
            <Link to={`/event/${props.event.id}`} key={props.event.id}>
              {props.event.title}, {startDate}-{endDate}{" "}
            </Link>
          </p>
          <h2>Price: {props.ticket.price}$</h2>
          <p>{props.ticket.description}</p>
          <em>Posted by {props.author.name}</em>
        </div>
      )}
    </div>
  );
}
