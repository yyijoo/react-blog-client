import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tilReducer from "redux/reducer/tilReducer.js";

const rootReducer = combineReducers({
  formReducer,
  tilReducer
});

export default rootReducer;
