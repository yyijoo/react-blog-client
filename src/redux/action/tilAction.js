import * as api from "components/shared/api.js";

const successFetch = data => ({
  type: "FETCH_TILS_SUCCESS",
  payload: data
});

// export const fetchAll = () => {

//   return dispatch
//   const response = await api.fetchAllTil();
//   try {
//     console.log("response in action", response.data);
//     // dispatch(successFetch(response.data));
//   } catch (err) {
//     console.log(err);
//   }
// };
