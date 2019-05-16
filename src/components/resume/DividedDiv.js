import React, { Fragment } from "react";
import styled from "styled-components";

export const DividedDiv = ({ leftCategory, rightContent, basicInfo }) => {
  const Container = styled.div`
    display: flex;

    @media screen and (max-width: 500px) {
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }

    .left-category {
      .left-category-name {
        width: 300px;
        font-size: ${props => (props.basicInfo ? "3rem" : "1rem")};
        font-weight: bold;

        @media screen and (max-width: 500px) {
          display: inline;
          margin: 0;
          font-size: ${props => (props.basicInfo ? "3rem" : "1.2rem")};
        }
      }

      .left-category-term {
        font-size: 10px;

        @media screen and (max-width: 500px) {
          display: inline;
          font-size: 0.8rem;
        }
      }

      .name-term-divider {
        display: none;
        @media screen and (max-width: 500px) {
          display: inline;
          margin: 0.5rem;
        }
      }

      @media screen and (max-width: 500px) {
        width: 100%;
        margin: 0;
      }
    }

    .right-content {
      margin-left: 3rem;
      font-size: 1rem;

      @media screen and (max-width: 500px) {
        width: 100%;
        margin: 0;
      }
    }
  `;
  return (
    <Container basicInfo={basicInfo}>
      <div className="left-category">
        <div className="left-category-name">{leftCategory.name}</div>

        {leftCategory.term ? (
          <Fragment>
            <span className="name-term-divider">-</span>
            <div className="left-category-term">{leftCategory.term}</div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
      <div className="right-content">{rightContent}</div>
    </Container>
  );
};
