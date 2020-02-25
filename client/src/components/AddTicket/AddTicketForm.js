import React from "react";

export default function AddTicketForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        description:
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={props.onChange}
          value={props.values.description}
        />
        <br />
        price:
        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={props.onChange}
          value={props.values.price}
        />
        <br />
        picture:
        <input
          type="text"
          name="picture"
          placeholder="picture"
          onChange={props.onChange}
          value={props.values.picture}
        />
        <br />
        <button type="submit">Add event</button>
      </form>
    </div>
  );
}
