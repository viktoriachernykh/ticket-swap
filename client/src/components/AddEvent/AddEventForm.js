import React from "react";

export default function AddEventForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        title:
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={props.onChange}
          value={props.values.title}
        />
        <br />
        description:
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={props.onChange}
          value={props.values.description}
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
        startDate:
        <input
          type="date"
          name="startDate"
          placeholder="startDate"
          onChange={props.onChange}
          value={props.values.startDate}
        />
        <br />
        endDate:
        <input
          type="date"
          name="endDate"
          placeholder="endDate"
          onChange={props.onChange}
          value={props.values.endDate}
        />
        <br />
        <button type="submit">Add event</button>
      </form>
    </div>
  );
}
