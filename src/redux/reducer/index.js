import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tilReducer from "redux/reducer/tilReducer.js";
import portfolioReducer from "redux/reducer/portfolioReducer.js";
import blogReducer from "redux/reducer/blogReducer.js";

const rootReducer = combineReducers({
  formReducer,
  tilReducer,
  portfolioReducer,
  blogReducer
});

export default rootReducer;
