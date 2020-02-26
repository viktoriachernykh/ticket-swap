import React from "react";

export default function CommentsList(props) {
  // console.log("comments props", props);

  const commentsList =
    props.comments &&
    props.comments.map(comment => {
      const commentAuthor = props.users.find(
        user => user.id === comment.userId
      );
      return (
        <p key={comment.id}>
          {commentAuthor.name} wrote: {comment.text}
        </p>
      );
    });
  return (
    <div>
      <h1>Comments List</h1>
      <ul>{commentsList}</ul>
    </div>
  );
}
