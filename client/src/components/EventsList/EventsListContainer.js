import React, { Component } from "react";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { fetchEvents } from "../../store/event/actions";
import AddEventFormContainer from "../AddEvent/AddEventFormContainer";

class EventsListContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    // console.log("this props events eventsListContainer?", this.props.events);
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
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { fetchEvents })(EventsListContainer);
