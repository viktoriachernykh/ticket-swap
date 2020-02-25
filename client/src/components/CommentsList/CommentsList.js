import React from "react";

export default function CommentsList(props) {
  // console.log("comments props", props);
  const commentsList = props.comments
    ? props.comments.map(comment => <li key={comment.id}>{comment.text}</li>)
    : "Loading comments";

  return (
    <div>
      <h1>Comments List</h1>
      <ul>{commentsList}</ul>
    </div>
  );
}
