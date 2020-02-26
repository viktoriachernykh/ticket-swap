const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case "ALL_USERS": {
      return action.users;
    }
    default:
      return state;
  }
}
