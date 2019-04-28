import React, { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;

  .title {
    font-size: 2rem;
    text-align: center;
    margin: 0 0 2rem 0;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProjectsWrapper = ({ data, component }) => {
  console.log("data", data);
  console.log("component", component);
  return (
    <Container>
      <div className="title">test</div>
      <div className="content">
        {data.map(item => {
          return <span>{component(item.title, item.term, item.imgURL)}</span>;
        })}
      </div>
    </Container>
  );
};

export default ProjectsWrapper;
