import React, { Component } from "react";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import CommentsList from "../CommentsList/CommentsList";
import AddCommentFormContainer from "../AddComment/AddCommentFormContainer";
import { fetchComments } from "../../store/comment/actions";

class TicketDetailsContainer extends Component {
  componentDidMount() {
    const currentId = Number(this.props.match.params.id);
    this.props.fetchComments(currentId);
  }
  render() {
    const currentId = Number(this.props.match.params.id);
    const currentTicket = this.props.tickets
      ? this.props.tickets.find(ticket => ticket.id === currentId)
      : "Loading ticket";
    return (
      <div>
        <TicketDetails ticket={currentTicket} />
        <CommentsList comments={this.props.comments} />
        {this.props.token && <AddCommentFormContainer ticket={currentTicket} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    tickets: state.tickets,
    comments: state.comments,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { fetchComments })(
  TicketDetailsContainer
);
