import * as c from "redux/constants.js";

const initialState = {
  selectedProject: "sool"
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.payload
      };

    default:
      return state;
  }
};

export default portfolioReducer;
