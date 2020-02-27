import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchComments } from "../../store/comment/actions";

class TicketsContainer extends Component {
  componentDidMount() {
    const currentId = Number(this.props.ticket.id);
    this.props.fetchComments(currentId);
  }

  render() {
    const currentTicket = this.props.ticket;

    const currentTicketAuthor = this.props.users.find(
      user => user.id === currentTicket.userId
    );

    const sameAuthorTickets = this.props.tickets.filter(
      ticket => ticket.userId === currentTicketAuthor.id
    );

    let risk = 5;
    this.props.comments.length > 3 && (risk += 5);
    sameAuthorTickets.length === 1 && (risk += 10);

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
    // console.log(color);

    return (
      <div>
        <Link to={`/ticket/${currentTicket.id}`} style={{ color: color }}>
          <li>
            risk = {risk}%, {currentTicket.description} FOR{" "}
            {currentTicket.price}$
          </li>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    tickets: state.tickets,
    users: state.users,
    comments: state.comments
  };
}
export default connect(mapStateToProps, { fetchComments })(TicketsContainer);
