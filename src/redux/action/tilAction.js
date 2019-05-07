import * as api from "components/shared/api.js";
import * as c from "redux/constants.js";

const beginLoading = () => {
  console.log("loading ");
  return {
    type: c.FETCH_TIL
  };
};

const succeedInFetching = (payload, isSearch) => {
  console.log("22222");
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
  console.log("fetching");

  const response = await api.fetchAllTil();
  console.log("response fetch", response);

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
  console.log("searching");
  const response = await api.searchTil(searchVal, dispatch);
  console.log("why.......", response);

  // try {
  //   console.log("1111", response);
  //   dispatch(succeedInSearching(response.data, true));
  // } catch (error) {
  //   console.log(error);
  //   dispatch(failToFetch());
  // }
};

export const showAllTil = () => {
  return {
    type: c.RETURN_TO_TIL
  };
};
