import request from "superagent";

const baseUrl = "http://localhost:4000";

export const fetchTickets = thisEventId => dispatch => {
  request(`${baseUrl}/ticket`)
    .then(response => {
      const allTickets = response.body;
      const currentEventTickets = allTickets.filter(
        ticket => ticket.eventId === thisEventId
      );
      dispatch(ticketsFetched(currentEventTickets));
    })
    .catch(console.error);
};
function ticketsFetched(tickets) {
  return {
    type: "ALL_TICKETS",
    tickets
  };
}

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
