import request from "superagent";

const baseUrl = "http://localhost:4000";

function eventsFetched(events) {
  return {
    type: "ALL_EVENTS",
    events
  };
}

export const fetchEvents = () => dispatch => {
  request(`${baseUrl}/event`)
    .then(response => {
      // console.log("events in actions?", response.body);
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

// function oneEvent(id) {
//   return {
//     type: "ONE_EVENT",
//     id
//   };
// }

// export const getEvent = id => dispatch => {
//   dispatch(oneEvent(id));
// };
