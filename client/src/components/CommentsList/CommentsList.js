import React from "react";

export default function CommentsList(props) {
  const commentsList =
    props.comments &&
    props.comments.map(comment => {
      const commentAuthor = props.users.find(
        user => user.id === comment.userId
      );
      return (
        <p key={comment.id}>
          <b>{commentAuthor.name}:</b> {comment.text}
        </p>
      );
    });
  return (
    <div>
      <ul>{commentsList}</ul>
    </div>
  );
}
