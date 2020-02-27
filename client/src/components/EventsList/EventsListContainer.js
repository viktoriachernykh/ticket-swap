import React, { Component } from "react";
import { connect } from "react-redux";

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

  render() {
    const eventsPerPage = 9;

    let eventsDisplayed;

    this.state.page === 1
      ? (eventsDisplayed = this.props.events.slice(0, eventsPerPage))
      : (eventsDisplayed = this.props.events.slice(
          (Number(this.state.page) - 1) * 9,
          eventsPerPage * Number(this.state.page) - 1
        ));

    return (
      <div>
        {/* {!this.props.events || (this.props.events.length === 0 && "Loading")} */}
        {this.props.events && this.props.events.length > 0 && (
          <div>
            <button onClick={this.prevPage}>prev page</button>
            <p>{this.state.page}</p>
            <button onClick={this.nextPage}>next page</button>
            <EventsList
              events={eventsDisplayed}
              // events={this.props.events}
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
