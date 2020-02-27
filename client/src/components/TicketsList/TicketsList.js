import React, { Component } from "react";

import TicketsContainer from "./TicketContainer";

class TicketsList extends Component {
  render() {
    const ticketsList = this.props.currentTickets.map(ticket => (
      <TicketsContainer
        key={ticket.id}
        ticket={ticket}
        event={this.props.event}
      />
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
