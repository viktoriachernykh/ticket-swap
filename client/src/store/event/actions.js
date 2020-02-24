import request from "superagent";

const baseUrl = "http://localhost:4000";

function allEvents(events) {
  return {
    type: "ALL_EVENTS",
    events
  };
}

export const getEvents = () => dispatch => {
  request(`${baseUrl}/event`)
    .then(response => {
      console.log("events in actions?", response.body);
      dispatch(allEvents(response.body));
    })
    .catch(console.error);
};

// function oneEvent(event) {
//   return {
//     type: "ONE_EVENT",
//     event
//   };
// }

// export const getEvent = id => dispatch => {
//   request(`${baseUrl}/event/${id}`)
//     .then(response => {
//       // console.log("evenTTT in actions?", response.body);
//       dispatch(oneEvent(response.body));
//     })
//     .catch(console.error);
// };
