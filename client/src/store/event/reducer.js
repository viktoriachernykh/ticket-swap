const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_EVENTS": {
      // console.log("events in reducer?", action);
      return action.events;
    }
    case "ADD_EVENT": {
      return [...state, action.newEvent];
    }
    default: {
      return state;
    }
  }
}
