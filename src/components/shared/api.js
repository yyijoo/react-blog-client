import axios from "axios";
const local = "http://localhost:8080/api";
import * as c from "redux/constants.js";

export const fetchAllTil = () => axios.get(`${local}/til`);

// export const searchTil = values => {
//   console.log("search api called");
//   axios.get(`${local}/til/search`, { params: values });
//   // .then(res => {
//   //   console.log("hi", res);
//   //   return res;
//   // });
// };

export const searchTil = (values, dispatch) => {
  console.log("search api called");
  axios.get(`${local}/til/search`, { params: values }).then(res => {
    const succeedInSearching = payload => {
      return {
        type: c.FETCH_SEARCH_SUCCESS,
        payload: payload
      };
    };

    dispatch(succeedInSearching(res.data));
  });
};
