import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchEvents } from "../../store/event/actions";
import { fetchUsers } from "../../store/users/actions";
import { fetchTickets } from "../../store/ticket/actions";

import EventsList from "./EventsList";
import AddEventFormContainer from "../AddEvent/AddEventFormContainer";

class EventsListContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchUsers();
    this.props.fetchTickets();
  }

  render() {
    return (
      <div>
        {!this.props.events || (this.props.events.length === 0 && "Loading")}
        {this.props.events && this.props.events.length > 0 && (
          <div>
            <EventsList
              events={this.props.events}
              user={this.props.user}
              token={this.props.token}
            />
            {this.props.token && <AddEventFormContainer />}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state", state);
  return {
    events: state.events,
    tickets: state.tickets,
    users: state.users,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, {
  fetchEvents,
  fetchUsers,
  fetchTickets
})(EventsListContainer);
