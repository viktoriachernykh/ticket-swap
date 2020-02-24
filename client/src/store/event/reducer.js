const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_EVENTS": {
      // console.log("events in reducer?", action);
      return action.events;
    }
    // case "ONE_EVENT": {
    //   // console.log("evenTTT in reducer?", action);
    //   return action.event;
    // }
    default: {
      return state;
    }
  }
}
