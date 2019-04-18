import React from "react";

export const Error = ({ location }) => (
  <div>
    <h3>'{location.pathname}' 경로의 자원을 찾을 수 없습니다.</h3>
  </div>
);

export default Error;
