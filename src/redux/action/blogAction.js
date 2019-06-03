import * as api from "components/shared/api.js";
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

const failToFetch = () => {
  return {
    type: c.FETCH_FAIL
  };
};

export const fetch = category => async dispatch => {
  dispatch(beginLoading());

  try {
    console.log("hre");
    const response = await api.fetchAll(category);
    console.log("res", response);
    dispatch(succeedInFetching(response.data));
  } catch (err) {
    console.log(err);
    dispatch(failToFetch());
  }
};
