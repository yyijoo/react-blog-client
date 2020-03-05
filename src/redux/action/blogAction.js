import * as api from "utils/api.js";
import * as c from "redux/constants.js";
import axios from "axios";
import config from "config.js";

const { API_BASE_URL, API_SPACE_ID, API_TOKEN } = config;

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
    const response = await axios.get(
      `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blogPost`
    );
    console.log(response);
    dispatch(succeedInFetching(response.data.items));
  } catch (err) {
    console.log("err", err);
  }

  // try {
  //   const response = await api.fetchAll(category);
  //   dispatch(succeedInFetching(response.data));
  // } catch (err) {
  //   console.log(err);
  //   dispatch(failToFetch());
  // }
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
