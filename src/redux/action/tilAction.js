import * as api from "components/shared/api.js";
import * as c from "redux/constants.js";

const beginLoading = () => {
  return {
    type: c.FETCH_TIL
  };
};

const succeedInFetching = payload => {
  return {
    type: c.FETCH_TIL_SUCCESS,
    payload: payload
  };
};

const failToFetch = () => {
  return {
    type: c.FETCH_TIL_FAIL
  };
};

export const fetchTil = () => async dispatch => {
  dispatch(beginLoading());
  const api = await api.fetchAllTil();

  try {
    console.log("api", api);
    dispatch(succeedInFetching(api.data));
  } catch (error) {
    console.log(error);
    dispatch(failToFetch());
  }
};
