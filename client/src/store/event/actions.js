import request from "superagent";

const baseUrl = "http://localhost:4000";

export const fetchEvents = () => dispatch => {
  request(`${baseUrl}/event`)
    .then(res => {
      dispatch(eventsFetched(res.body));
    })
    .catch(console.error);
};
function eventsFetched(events) {
  return {
    type: "ALL_EVENTS",
    events
  };
}

export const addEvent = (newEvent, token) => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .set("Authorization", `Bearer ${token}`)
    .send(newEvent)
    .then(res => {
      dispatch(eventAdded(res.body));
    })
    .catch(console.error);
};
function eventAdded(newEvent) {
  return {
    type: "ADD_EVENT",
    newEvent
  };
}
// function oneEvent(id) {
//   return {
//     type: "ONE_EVENT",
//     id
//   };
// }

// export const getEvent = id => dispatch => {
//   dispatch(oneEvent(id));
// };
