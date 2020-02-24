import request from "superagent";
export const ALL_EVENTS = "ALL_EVENTS";

const baseUrl = "http://localhost:4000";

function allEvents(events) {
  return {
    type: ALL_EVENTS,
    events
  };
}

// export function getEvents(dispatch, getState) {
export const getEvents = () => dispatch => {
  request(`${baseUrl}/event`)
    .then(response => {
      console.log("events in actions?", response.body);
      dispatch(allEvents(response.body));
    })
    .catch(console.error);
};
