import request from "superagent";

const baseUrl = "http://localhost:4000";

export const fetchTickets = () => dispatch => {
  request(`${baseUrl}/ticket`)
    .then(response => {
      dispatch(allTicketsFetched(response.body));
    })
    .catch(console.error);
};
function allTicketsFetched(tickets) {
  return {
    type: "ALL_TICKETS",
    tickets
  };
}

// export const fetchTickets = currentEventId => dispatch => {
//   request(`${baseUrl}/ticket`)
//     .then(response => {
//       const allTickets = response.body;
//       const currentEventTickets = allTickets.filter(
//         ticket => ticket.eventId === currentEventId
//       );
//       dispatch(ticketsFetched(currentEventTickets));
//     })
//     .catch(console.error);
// };
// function ticketsFetched(tickets) {
//   return {
//     type: "CURRENT_EVENT_TICKETS",
//     tickets
//   };
// }

export const addTicket = (newTicket, token) => dispatch => {
  request
    .post(`${baseUrl}/ticket`)
    .set("Authorization", `Bearer ${token}`)
    .send(newTicket)
    .then(res => {
      dispatch(ticketAdded(res.body));
    })
    .catch(console.error);
};
function ticketAdded(newTicket) {
  return {
    type: "ADD_TICKET",
    newTicket
  };
}
