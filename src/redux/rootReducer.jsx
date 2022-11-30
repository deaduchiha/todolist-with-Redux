import { combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
  todoState: todoReducer,
});

export default rootReducer;
