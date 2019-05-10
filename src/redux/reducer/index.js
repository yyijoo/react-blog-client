import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tilReducer from "redux/reducer/tilReducer.js";
import portfolioReducer from "redux/reducer/portfolioReducer.js";

const rootReducer = combineReducers({
  formReducer,
  tilReducer,
  portfolioReducer
});

export default rootReducer;
