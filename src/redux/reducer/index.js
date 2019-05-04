import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tilReducer from "redux/reducer/til.js";

const rootReducer = combineReducers({
  formReducer,
  tilReducer
});

export default rootReducer;
