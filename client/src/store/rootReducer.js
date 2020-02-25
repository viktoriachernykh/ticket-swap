import { combineReducers } from "redux";
import user from "./user/reducer.js";
import events from "./event/reducer";
import tickets from "./ticket/reducer";
// import comments from "./comment/reducer";

export default combineReducers({
  session: user,
  events,
  tickets
  // comments
});
