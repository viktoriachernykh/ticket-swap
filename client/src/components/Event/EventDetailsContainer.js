import React, { Component } from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { getEvents } from "../../store/event/actions";
// import { getEvent } from "../../store/event/actions";

class EventDetailsContainer extends Component {
  componentDidMount() {
    // const eventId = this.props.match.params.id;
    // console.log(eventId);
    // this.props.getEvent(eventId);
    this.props.getEvents();
  }

  render() {
    // console.log("this props from details?", this.props);

    const currentId = Number(this.props.match.params.id);
    const currentEvent = this.props.events
      ? this.props.events.find(event => event.id === currentId)
      : "Loading event";

    return (
      <div>
        <EventDetails event={currentEvent} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("details state", state);
  return { events: state.events };
}

// export default connect(mapStateToProps, { getEvent })(EventDetailsContainer);
export default connect(mapStateToProps, { getEvents })(EventDetailsContainer);
