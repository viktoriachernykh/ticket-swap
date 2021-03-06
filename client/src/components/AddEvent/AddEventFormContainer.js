import React from "react";
import { connect } from "react-redux";

import { addEvent } from "../../store/event/actions";

import AddEventForm from "./AddEventForm";

class AddEventFormContainer extends React.Component {
  state = {
    title: "",
    description: "",
    picture: "",
    startDate: "",
    endDate: ""
  };

  onSubmit = event => {
    const token = this.props.token;

    const newEvent = {
      title: this.state.title,
      description: this.state.description,
      picture: this.state.picture,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      userId: this.props.user.id
    };

    event.preventDefault();
    this.props.addEvent(newEvent, token);

    this.setState({
      title: "",
      description: "",
      picture: "",
      startDate: "",
      endDate: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <AddEventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.session.user },
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { addEvent })(AddEventFormContainer);
