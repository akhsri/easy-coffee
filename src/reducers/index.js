import { combineReducers } from "redux";
import beverageReducer from "./beverageReducer";

export default combineReducers({
  beverage: beverageReducer
});
