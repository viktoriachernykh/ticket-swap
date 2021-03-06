import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchComments } from "../../store/comment/actions";

import TicketDetails from "./TicketDetails";
import CommentsList from "../CommentsList/CommentsList";
import AddCommentFormContainer from "../AddComment/AddCommentFormContainer";
import EditTicketFormContainer from "../EditTicket/EditTicketFormContainer";

class TicketDetailsContainer extends Component {
  state = {
    toggle: false
  };
  componentDidMount() {
    this.props.fetchComments();
  }

  toggleEditForm = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const currentId = Number(this.props.match.params.id);

    const currentTicket = this.props.tickets.find(
      ticket => ticket.id === currentId
    );

    const currentTicketEvent = this.props.events.find(
      event => event.id === currentTicket.eventId
    );

    const currentTicketAuthor = this.props.users.find(
      user => user.id === currentTicket.userId
    );

    const currentTicketComments = this.props.comments.filter(
      c => c.ticketId === currentId
    );

    let risk = 5;

    currentTicketComments.length > 3 && (risk += 5);

    const everyTicketPrice = this.props.tickets
      .filter(ticket => ticket.eventId === currentTicket.eventId)
      .map(ticket => ticket.price);

    const avgPrice =
      everyTicketPrice.reduce((total, current) => total + current, 0) /
      everyTicketPrice.length;

    const percentageDifference = Math.floor(
      100 - (currentTicket.price * 100) / avgPrice
    );
    percentageDifference > 0
      ? (risk += percentageDifference) // if cheaper
      : percentageDifference < -10 // if more expensive
      ? (risk -= 10)
      : (risk += percentageDifference);

    const sameAuthorTickets = this.props.tickets.filter(
      ticket => ticket.userId === currentTicketAuthor.id
    );
    sameAuthorTickets.length === 1 && (risk += 10);

    const time = new Date(currentTicket.createdAt);
    const hours = time.getHours();
    hours >= 9 && hours <= 17 ? (risk -= 10) : (risk += 10);

    risk < 5 && (risk = 5);
    risk > 95 && (risk = 95);

    let color;
    risk < 30
      ? (color = "green")
      : risk < 60
      ? (color = "orange")
      : (color = "red");

    return (
      <div>
        <TicketDetails
          ticket={currentTicket}
          event={currentTicketEvent}
          author={currentTicketAuthor}
        />
        <p>
          Risk: We calculated that the risk of this ticket being a fraud is{" "}
          <b style={{ color: color }}>{risk}%</b>
        </p>
        {this.props.user.id === currentTicket.userId && (
          <button onClick={() => this.toggleEditForm()}>Edit ticket?</button>
        )}
        <br />
        {this.state.toggle && (
          <EditTicketFormContainer
            ticket={currentTicket}
            toggleForm={this.toggleEditForm}
          />
        )}
        <h2>{currentTicketComments.length} comments for this ticket:</h2>
        <CommentsList
          comments={currentTicketComments}
          users={this.props.users}
        />
        {this.props.token && <AddCommentFormContainer ticket={currentTicket} />}
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
    comments: state.comments,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { fetchComments })(
  TicketDetailsContainer
);
