import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchEvents } from "../../store/event/actions";
import { fetchUsers } from "../../store/users/actions";
import { fetchTickets } from "../../store/ticket/actions";

import EventsList from "./EventsList";
import AddEventFormContainer from "../AddEvent/AddEventFormContainer";

class EventsListContainer extends Component {
  state = { page: 1, toggle: false };

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchUsers();
    this.props.fetchTickets();
  }

  toggleAddEventForm = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  prevPage = () => {
    this.state.page > 1 && this.setState({ page: this.state.page - 1 });
  };

  nextPage = () => {
    const nextPageFirstEvent = Number(this.state.page) * 9;
    this.props.events[nextPageFirstEvent] &&
      this.setState({ page: this.state.page + 1 });
  };

  toFirstPage = () => {
    this.setState({ page: 1 });
  };

  render() {
    const eventsPerPage = 9;
    const now = new Date();

    let eventsDisplayed;
    const notFinishedEvents = this.props.events.filter(
      event => now < new Date(event.endDate)
    );

    this.state.page === 1
      ? (eventsDisplayed = notFinishedEvents.slice(0, eventsPerPage))
      : (eventsDisplayed = notFinishedEvents.slice(
          (Number(this.state.page) - 1) * 9,
          eventsPerPage * Number(this.state.page)
        ));

    return (
      <div>
        <div>
          <h1>We have {notFinishedEvents.length} events!</h1>
          {this.props.token && (
            <button onClick={this.toggleAddEventForm}>Add event</button>
          )}
          {this.state.toggle && <AddEventFormContainer />}
          <EventsList
            className="eventList"
            events={eventsDisplayed}
            user={this.props.user}
            token={this.props.token}
          />
          <div className="pages">
            {this.state.page !== 1 && (
              <button className="pages">
                <Link to={"/"} onClick={this.toFirstPage}>
                  <b>1</b>
                </Link>
              </button>
            )}
            <button onClick={this.prevPage} className="pages">
              <b>prev</b>
            </button>
            <b>{this.state.page}</b>
            <button onClick={this.nextPage} className="pages">
              <b>next</b>
            </button>
          </div>
        </div>
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

export default connect(mapStateToProps, {
  fetchEvents,
  fetchUsers,
  fetchTickets
})(EventsListContainer);
