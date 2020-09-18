import { combineReducers } from "redux";
import logReducer from "./logReducer";
import memberReducer from "./memberReducer";
import authReducer from "./authReducer";

export default combineReducers({
  log: logReducer,
  member: memberReducer,
  
});
