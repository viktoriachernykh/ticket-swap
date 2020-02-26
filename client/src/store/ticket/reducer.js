const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_TICKETS": {
      return action.tickets;
    }
    // case "CURRENT_EVENT_TICKETS": {
    //   // console.log("tickets in reducer?", action);
    //   return action.tickets;
    // }
    case "ADD_TICKET": {
      return [...state, action.newTicket];
    }
    default: {
      return state;
    }
  }
}
