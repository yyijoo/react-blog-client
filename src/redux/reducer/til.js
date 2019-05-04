import * as c from "redux/constants.js";

const initialState = {
  loading: false,
  tils: "",
  searchResult: ""
};

const tilReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.FETCH_TIL:
      return {
        ...state,
        loading: true
      };

    case c.FETCH_TIL_SUCCESS:
      return {
        ...state,
        loading: false,
        tils: action.payload
      };

    case c.FETCH_TIL_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default tilReducer;
