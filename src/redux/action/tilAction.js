import * as api from "utils/api.js";
import * as c from "redux/constants.js";

const beginLoading = () => {
  return {
    type: c.FETCH_TIL
  };
};

const succeedInFetching = (payload, isSearch) => {
  if (isSearch) {
    return {
      type: c.FETCH_SEARCH_SUCCESS,
      payload: payload
    };
  } else {
    return {
      type: c.FETCH_TIL_SUCCESS,
      payload: payload
    };
  }
};

const failToFetch = () => {
  return {
    type: c.FETCH_TIL_FAIL
  };
};

const changeSearchVal = searchVal => {
  return {
    type: c.CHANGE_SEARCH_VALUE,
    payload: searchVal
  };
};

export const fetchTil = () => async dispatch => {
  dispatch(beginLoading());

  const response = await api.fetchAllTil();

  try {
    dispatch(succeedInFetching(response.data));
  } catch (error) {
    console.log(error);
    dispatch(failToFetch());
  }
};

export const searchTil = searchVal => async dispatch => {
  dispatch(beginLoading());
  dispatch(changeSearchVal(searchVal));
  const response = await api.searchTil(searchVal, dispatch);
};

export const showAllTil = () => {
  return {
    type: c.RETURN_TO_TIL
  };
};

// ::::::: fetch local md files ::::::: //

// export const fetchTilFromLocalFile = dispatch => {
//   const markdownContext = require.context("data/markdown", false, /\.md$/);
//   const markdownFiles = markdownContext.keys().map(filename => {
//     const name = filename.split("-");
//     const post = {
//       week: name[0].slice(2),
//       date: name[1] + "-" + name[2].slice(0, -3),
//       content: markdownContext(filename)
//     };
//     return post;
//   });

//   console.log("came here");
//   const response = await api.fetchLocalTil(markdownFiles, dispatch);
// };
