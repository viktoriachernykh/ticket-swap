const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_EVENTS": {
      console.log("events in reducer?", action);
      return action.events;
    }
    default: {
      return state;
    }
  }
}
