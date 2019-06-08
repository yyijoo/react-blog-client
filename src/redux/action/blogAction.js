import * as api from "utils/api.js";
import * as c from "redux/constants.js";

const beginLoading = () => {
  return {
    type: c.FETCH_START
  };
};

const succeedInFetching = payload => {
  return {
    type: c.FETCH_SUCCESS,
    payload: payload
  };
};

const succeedInFetchingSelected = payload => {
  return {
    type: c.FETCH_SELECTED_SUCCESS,
    payload: payload
  };
};

const failToFetch = () => {
  return {
    type: c.FETCH_FAIL
  };
};

export const fetch = category => async dispatch => {
  dispatch(beginLoading());

  try {
    const response = await api.fetchAll(category);
    dispatch(succeedInFetching(response.data));
  } catch (err) {
    console.log(err);
    dispatch(failToFetch());
  }
};

export const fetchSelectedArticle = _id => async dispatch => {
  dispatch(beginLoading());

  try {
    const res = await api.fetchSelectedArticle(_id);
    console.log("res in action", res);
    dispatch(succeedInFetchingSelected(res.data));
  } catch (err) {
    console.log(err);
    dispatch(failToFetch());
  }
};
