import React from "react";
import styled from "styled-components";

const List = ({ data }) => {
  const Conatiner = styled.div`
    .desc {
    }

    .item {
    }
  `;

  return (
    <div>
      {data.map(item => (
        <div className="item">
          <div>- {item}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
