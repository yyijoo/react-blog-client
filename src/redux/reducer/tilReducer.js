import * as c from "redux/constants.js";

const initialState = {
  loading: false,
  tils: "",
  searchValue: "",
  searchResult: ""
};

const tilReducer = (state = initialState, action) => {
  console.log("til reducer working");
  switch (action.type) {
    case c.FETCH_TIL:
      console.log("FETCH_TIL reducer");
      return {
        ...state,
        loading: true
      };

    case c.FETCH_TIL_SUCCESS:
      console.log("FETCH_TIL_SUCCESS reducer");
      return {
        ...state,
        loading: false,
        tils: action.payload
      };

    case c.FETCH_TIL_FAIL:
      console.log("FETCH_TIL_FAIL reducer");
      return {
        ...state,
        loading: false
      };

    case c.FETCH_SEARCH_SUCCESS:
      console.log("FETCH_SEARCH_SUCCESS reducer");
      return {
        ...state,
        loading: false,
        searchResult: action.payload
      };

    case c.CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };

    case c.RETURN_TO_TIL:
      return {
        ...state,
        searchResult: "",
        searchValue: ""
      };

    default:
      return state;
  }
};

export default tilReducer;
