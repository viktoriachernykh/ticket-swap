import React from "react";

export default function TicketList(props) {
  return (
    <div>
      {props.tickets &&
        props.tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.description} FOR {ticket.price}$
          </li>
        ))}
    </div>
  );
}
