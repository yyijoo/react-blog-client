import React from "react";
import styled from "styled-components";

export const DividedDiv = ({ leftCategory, rightContent, basicInfo }) => {
  console.log("dividedDiv", leftCategory.name, rightContent, basicInfo);
  const Container = styled.div`
    display: flex;

    ${props => console.log("here", props)} .left-category {
      .left-category-name {
        width: 300px;
        border: 1px soilid red;
        font-size: ${props => (props.basicInfo ? "3rem" : "1rem")};
        font-weight: bold;
      }

      .left-category-term {
        font-size: 10px;
      }
    }

    .right-content {
      margin-left: 3rem;
      font-size: 1rem;
    }
  `;
  return (
    <Container basicInfo={basicInfo}>
      <div className="left-category">
        <div className="left-category-name">{leftCategory.name}</div>
        <div className="left-category-term">{leftCategory.term}</div>
      </div>
      <div className="right-content">{rightContent}</div>
    </Container>
  );
};
