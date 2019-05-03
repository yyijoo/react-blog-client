import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tilReducer from "redux/reducer/til.js";

const rootReducer = combineReducers({
  form: formReducer,
  tilList: tilReducer
});

export default rootReducer;
