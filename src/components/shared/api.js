import axios from "axios";
const local = "http://localhost:8080/api";
import * as c from "redux/constants.js";

export const fetchAllTil = () => axios.get(`${local}/til`);

export const searchTil = (values, dispatch) => {
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

export const addTil = values => {
  // JSON.stringify(values);
  axios.post(`${local}/addtils`, values, {
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  });
};

export const fetchLocalTil = async (markdownFiles, dispatch) => {
  console.log("api", markdownFiles);
  Promise.all(
    markdownFiles.map(file => fetch(file.content).then(res => res.text()))
  )
    .then(data => console.log("data", data))
    .catch(err => console.error(err));
};
