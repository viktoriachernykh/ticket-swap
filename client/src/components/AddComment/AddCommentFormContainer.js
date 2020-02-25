import React from "react";
import { connect } from "react-redux";
import { addComment } from "../../store/comment/actions";
import AddCommentForm from "./AddCommentForm";

class AddCommentFormContainer extends React.Component {
  state = {
    text: ""
  };

  onSubmit = event => {
    // console.log("state", this.state);
    const token = this.props.token;
    const newComment = {
      text: this.state.text,
      userId: this.props.user.id,
      ticketId: this.props.ticket.id
    };
    // console.log(newComment, token);
    event.preventDefault();
    this.props.addComment(newComment, token);
    this.setState({
      text: ""
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
        <h1>Add new comment</h1>
        <AddCommentForm
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

export default connect(mapStateToProps, { addComment })(
  AddCommentFormContainer
);
