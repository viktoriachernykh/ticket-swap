import React, { Component } from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import TicketList from "../TicketList/TicketList";
import { fetchEvents } from "../../store/event/actions";
// import { getEvent } from "../../store/event/actions";
import { fetchTickets } from "../../store/ticket/actions";

class EventDetailsContainer extends Component {
  componentDidMount() {
    const currentId = Number(this.props.match.params.id);
    this.props.fetchEvents();
    // this.props.getEvent(currentId);
    this.props.fetchTickets(currentId);
  }

  render() {
    const currentId = Number(this.props.match.params.id);
    const currentEvent =
      this.props.events && this.props.tickets
        ? this.props.events.find(event => event.id === currentId)
        : "Loading event";

    return (
      <div>
        {this.props.events && this.props.tickets && (
          <div>
            <EventDetails event={currentEvent} />
            <TicketList tickets={this.props.tickets} />
            {/* <AddTicketForm /> */}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state???", state);
  return { events: state.events, tickets: state.tickets };
  // return { currentEvent: state.events, tickets: state.tickets };
}
// export default connect(mapStateToProps, { getEvent, fetchTickets })(EventDetailsContainer);
export default connect(mapStateToProps, { fetchEvents, fetchTickets })(
  EventDetailsContainer
);
