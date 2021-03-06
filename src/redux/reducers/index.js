import { combineReducers } from "redux";
import logReducer from "./logReducer";
import memberReducer from "./memberReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  log: logReducer,
  member: memberReducer,
  auth: authReducer,
  alert: alertReducer,
});
