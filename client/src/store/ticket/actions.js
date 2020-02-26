import request from "superagent";

const baseUrl = "http://localhost:4000";

export const fetchTickets = () => dispatch => {
  request(`${baseUrl}/ticket`)
    .then(response => {
      dispatch(ticketsFetched(response.body));
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

export const editTicket = (currentTicket, ticketId) => dispatch => {
  request
    .patch(`${baseUrl}/ticket/${ticketId}`)
    .send(currentTicket)
    .then(res => {
      dispatch(eventEdited(res.body));
    })
    .catch(console.error);
};
function eventEdited(editedTicket) {
  return {
    type: "EDIT_TICKET",
    editedTicket
  };
}
