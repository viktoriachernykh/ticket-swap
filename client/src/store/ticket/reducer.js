const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_TICKETS": {
      // console.log("tickets in reducer?", action);
      return action.tickets;
    }
    default: {
      return state;
    }
  }
}