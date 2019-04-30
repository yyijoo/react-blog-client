import React, { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 7rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  .title {
    font-size: 1.5rem;
    text-align: center;
    margin: 0 0 3rem 0;
    font-weight: bold;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ProjectsWrapper = ({ title, data, component }) => {
  return (
    <Container>
      <div className="title">{title}</div>
      <div className="content">
        {data.map(item => {
          return (
            <span>
              {component(item.title, item.term, item.imgUrl, item.redirectUrl)}
            </span>
          );
        })}
      </div>
    </Container>
  );
};

export default ProjectsWrapper;
