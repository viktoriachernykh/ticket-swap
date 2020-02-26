const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_TICKETS": {
      return action.tickets;
    }
    case "ADD_TICKET": {
      return [...state, action.newTicket];
    }
    case "EDIT_TICKET": {
      const newState = [...state].map(event =>
        event.id === action.editedTicket.id ? action.editedTicket : event
      );
      return newState;
    }
    default: {
      return state;
    }
  }
}
