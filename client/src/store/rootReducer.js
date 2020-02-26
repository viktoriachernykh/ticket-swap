import { combineReducers } from "redux";
import user from "./user/reducer.js";
import users from "./users/reducer.js";
import events from "./event/reducer";
import tickets from "./ticket/reducer";
import comments from "./comment/reducer";

export default combineReducers({
  session: user,
  users,
  events,
  tickets,
  comments
});
