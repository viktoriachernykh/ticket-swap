import React from "react";
import CommentsDetails from "./CommentDetails";

export default function CommentsList(props) {
  // console.log("comments props", props);
  const commentsList = props.comments
    ? props.comments.map(comment => (
        <CommentsDetails comment={comment} key={comment.id} />
      ))
    : "Loading comments";

  return (
    <div>
      <h1>Comments List</h1>
      <ul>{commentsList}</ul>
    </div>
  );
}
