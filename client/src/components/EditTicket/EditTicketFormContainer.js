import React from "react";
import { connect } from "react-redux";

import { editTicket } from "../../store/ticket/actions";

import EditTicketForm from "./EditTicketForm";

class EditTicketFormContainer extends React.Component {
  state = {
    description: this.props.ticket.description,
    price: this.props.ticket.price,
    picture: this.props.ticket.picture
  };

  onSubmit = event => {
    // const token = this.props.token;
    const editedTicket = {
      description: this.state.description,
      price: this.state.price,
      picture: this.state.picture,
      userId: this.props.ticket.userId,
      eventId: this.props.ticket.eventId
    };

    event.preventDefault();
    this.props.editTicket(editedTicket, this.props.ticket.id);
    this.props.toggleForm();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Edit ticket</h1>
        <EditTicketForm
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
    user: { ...state.session.user }
    // token: state.session.jwt
  };
}

export default connect(mapStateToProps, { editTicket })(
  EditTicketFormContainer
);
