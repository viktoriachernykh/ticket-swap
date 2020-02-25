import React from "react";
import { connect } from "react-redux";
import { addTicket } from "../../store/ticket/actions";
import AddTicketForm from "./AddTicketForm";

class AddEventTicketContainer extends React.Component {
  state = {
    description: "",
    price: "",
    picture: ""
  };

  onSubmit = event => {
    // console.log("props.event", this.props.event.id);
    const token = this.props.token;
    const newTicket = {
      description: this.state.description,
      price: this.state.price,
      picture: this.state.picture,
      userId: this.props.user.id,
      eventId: this.props.event.id
    };
    // console.log(newTicket, token); // { description price picture } , jwt
    event.preventDefault();
    this.props.addTicket(newTicket, token);

    this.setState({
      description: "",
      price: "",
      picture: ""
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
        <h1>Add new ticket</h1>
        <AddTicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("add ticket state", state); // session.jwt, session.user, events, tickets
  return {
    user: { ...state.session.user },
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { addTicket })(AddEventTicketContainer);
