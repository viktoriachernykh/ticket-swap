import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchCommentAuthor } from "../../store/user/actions";

class CommentsDetails extends Component {
  componentDidMount() {
    // console.log("THIS details props", this);
    // this.props.fetchCommentAuthor(this.props.comment.userId);
  }

  render() {
    return (
      <div>
        {/* <h1>hello details of comment</h1> */}
        {/* <p>{this.props.author}</p> */}
        <p> {this.props.comment.text}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state", state);
  return {};
}

export default connect(mapStateToProps)(CommentsDetails);
