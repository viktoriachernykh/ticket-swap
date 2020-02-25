const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_EVENTS": {
      // console.log("events in reducer?", action);
      return action.events;
    }
    case "ADD_EVENT": {
      // console.log("event in reducer?", action);
      return [...state, action.newEvent];
    }
    // case "ONE_EVENT": {
    //   const allEvents = [...state];
    //   const currentEvent = allEvents.find(event => event.id === action.id);
    //   console.log("currentEvent in reducer?", currentEvent);
    //   return currentEvent;
    // }
    default: {
      return state;
    }
  }
}
