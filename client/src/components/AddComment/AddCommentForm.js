import React from "react";

export default function AddTicketForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        <h2>Add your comment:</h2>
        <input
          type="text"
          name="text"
          placeholder="text"
          onChange={props.onChange}
          value={props.values.text}
        />
        <br />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
