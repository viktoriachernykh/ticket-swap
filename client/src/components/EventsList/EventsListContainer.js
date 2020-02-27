import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchEvents } from "../../store/event/actions";
import { fetchUsers } from "../../store/users/actions";
import { fetchTickets } from "../../store/ticket/actions";

import EventsList from "./EventsList";
import AddEventFormContainer from "../AddEvent/AddEventFormContainer";

class EventsListContainer extends Component {
  state = { page: 1 };

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchUsers();
    this.props.fetchTickets();
  }

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
    // console.log("notFinishedEvents", notFinishedEvents);

    this.state.page === 1
      ? (eventsDisplayed = notFinishedEvents.slice(0, eventsPerPage))
      : (eventsDisplayed = notFinishedEvents.slice(
          (Number(this.state.page) - 1) * 9,
          eventsPerPage * Number(this.state.page) - 1
        ));

    return (
      <div>
        {/* {!this.props.events || (this.props.events.length === 0 && "Loading")} */}
        {this.props.events && this.props.events.length > 0 && (
          <div>
            <EventsList
              events={eventsDisplayed}
              // events={this.props.events}
              user={this.props.user}
              token={this.props.token}
            />
            <Link to={"/"} onClick={this.toFirstPage}>
              1page
            </Link>
            <button onClick={this.prevPage}>prev page</button>
            {this.state.page}
            <button onClick={this.nextPage}>next page</button>
            {this.props.token && <AddEventFormContainer />}
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

export default connect(mapStateToProps, {
  fetchEvents,
  fetchUsers,
  fetchTickets
})(EventsListContainer);
