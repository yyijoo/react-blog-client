import * as c from "redux/constants";

export const selectProject = project => {
  return {
    type: c.SELECT_PROJECT,
    payload: project
  };
};
