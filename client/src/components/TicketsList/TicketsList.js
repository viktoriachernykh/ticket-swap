import React from "react";
import { Link } from "react-router-dom";

export default function TicketsList(props) {
  const ticketsList = props.tickets
    ? props.tickets.map(ticket => (
        <Link to={`/ticket/${ticket.id}`} key={ticket.id}>
          <li>
            {ticket.description} FOR {ticket.price}${/* {ticket.picture} */}
          </li>
        </Link>
      ))
    : "Loading tickets";

  return (
    <div>
      <h1>Tickets List</h1>
      <ul>{ticketsList}</ul>
    </div>
  );
}
