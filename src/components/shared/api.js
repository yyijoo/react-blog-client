import axios from "axios";
const local = "http://localhost:8080/api";

export const fetchAllTil = () => axios.get(`${local}/til`);

export const searchTil = values =>
  axios.get(`${local}/til/search`, { params: values });

export const search = values => {
  console.log("keyword", values);
  console.log("here", `${local}/til/search`);
  axios.get(`${local}/til/search`, { params: values }).then(res => {
    // this.setState({ data: res.data });
    console.log("hi", res);
    return res;
  });
};

// http://localhost:8080/api/til/search
