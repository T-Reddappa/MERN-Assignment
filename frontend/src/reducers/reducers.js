import { combineReducers } from "redux";
import teamReducer from "./teamReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  users: userReducer,
  teams: teamReducer,
});

export default rootReducer;
