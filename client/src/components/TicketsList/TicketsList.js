import React, { Component } from "react";

import TicketLink from "./TicketLink";

class TicketsList extends Component {
  render() {
    const ticketsList = this.props.currentTickets.map(ticket => (
      <TicketLink key={ticket.id} ticket={ticket} event={this.props.event} />
    ));

    return (
      <div>
        <h1>Tickets List</h1>
        <ul>{ticketsList}</ul>
      </div>
    );
  }
}

export default TicketsList;
