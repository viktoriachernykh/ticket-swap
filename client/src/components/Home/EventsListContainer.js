import React from "react";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { getEvents } from "../../store/event/actions";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    // console.log("this?", this.props.events);
    return (
      <div>
        <EventsList events={this.props.events} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state", state);
  return { events: state.events };
}

const mapDispatchToProps = { getEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListContainer);
