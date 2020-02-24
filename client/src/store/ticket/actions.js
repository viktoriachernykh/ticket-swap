import request from "superagent";

const baseUrl = "http://localhost:4000";

function ticketsFetched(tickets) {
  return {
    type: "ALL_TICKETS",
    tickets
  };
}

export const fetchTickets = thisEventId => dispatch => {
  request(`${baseUrl}/ticket`)
    .then(response => {
      // console.log("tickets in actions?", response);
      const allTickets = response.body;
      const currentEventTickets = allTickets.filter(
        ticket => ticket.eventId === thisEventId
      );
      // console.log("currentEventTickets?", currentEventTickets);
      dispatch(ticketsFetched(currentEventTickets));
    })
    .catch(console.error);
};
