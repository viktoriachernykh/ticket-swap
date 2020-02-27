import React, { Component } from "react";
import { connect } from "react-redux";

import EventDetails from "./EventDetails";
import TicketsList from "../TicketsList/TicketsList";
import AddTicketFormContainer from "../AddTicket/AddTicketFormContainer";

class EventDetailsContainer extends Component {
  state = { toggle: false };

  toggleAddTicketForm = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const currentId = Number(this.props.match.params.id);

    const currentEvent = this.props.events.find(
      event => event.id === currentId
    );

    const currentEventTickets = this.props.tickets.filter(
      ticket => ticket.eventId === currentId
    );

    const currentEventAuthor = this.props.users.find(
      user => user.id === currentEvent.userId
    );

    return (
      <div>
        {this.props.events && this.props.tickets && (
          <div>
            <EventDetails event={currentEvent} author={currentEventAuthor} />
            <TicketsList
              event={currentEvent}
              currentTickets={currentEventTickets}
            />
            {this.props.token && (
              <button onClick={this.toggleAddTicketForm}>Add ticket</button>
            )}
            {this.state.toggle && (
              <AddTicketFormContainer event={currentEvent} />
            )}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    tickets: state.tickets,
    users: state.users,
    user: state.session.user,
    token: state.session.jwt
  };
}
export default connect(mapStateToProps)(EventDetailsContainer);
