import * as c from "redux/constants";

const initialState = {
  loading: false,
  articles: null,
  selectedArticle: null
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.FETCH_START:
      return {
        ...state,
        loading: true
      };

    case c.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      };

    case c.FETCH_SELECTED_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedArticle: action.payload
      };

    case c.FETCH_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default blogReducer;
