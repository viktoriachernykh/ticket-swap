const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_COMMENTS": {
      console.log("comments in reducer?", action);
      return action.comments;
    }
    case "ADD_COMMENT": {
      return [...state, action.newComment];
    }
    default: {
      return state;
    }
  }
}
