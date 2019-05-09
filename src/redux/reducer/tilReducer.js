import * as c from "redux/constants.js";

// const initialState = {
//   loading: false,
//   tils: "",
//   searchValue: "",
//   searchResult: ""
// };

// const tilReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case c.FETCH_TIL:
//       return {
//         ...state,
//         loading: true
//       };

//     case c.FETCH_TIL_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         tils: action.payload
//       };

//     case c.FETCH_TIL_FAIL:
//       return {
//         ...state,
//         loading: false
//       };

//     case c.FETCH_SEARCH_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         searchResult: action.payload
//       };

//     case c.CHANGE_SEARCH_VALUE:
//       return {
//         ...state,
//         searchValue: action.payload
//       };

//     case c.RETURN_TO_TIL:
//       return {
//         ...state,
//         searchResult: "",
//         searchValue: ""
//       };

//     default:
//       return state;
//   }
// };

// export default tilReducer;

const initialState = {
  posts: ""
};

const localTilReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.FETCH_TIL_FROM_LOCAL:
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
};

export default localTilReducer;
