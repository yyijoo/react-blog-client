const initialState = {
  tils: "",
  searchResult: ""
};

const tilReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TILS_SUCCESS":
      console.log("came here");
      return {
        ...state,
        tils: action.payload
      };

    case "FETCH_SEARCHRESULT_SUCCESS":
      return {
        ...state,
        searchResult: action.payload
      };

    default:
      console.log("default");
      return state;
  }
};

export default tilReducer;
