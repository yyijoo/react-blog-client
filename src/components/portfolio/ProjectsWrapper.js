import React, { Fragment } from "react";
import styled from "styled-components";
import ProjectDetailLeft from "pages/portfolio/projectDetailLeft";

const Container = styled.div`
  display: flex;
  margin-top: 6rem;
  margin-bottom: 8rem;

  .title-content {
    min-width: 300px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  .content-detail {
    min-width: 600px;
    margin-top: 3rem;
    margin-left: 8rem;
  }
`;

const ProjectsWrapper = ({ title, data, component, noBackground }) => {
  return (
    <Container>
      <div className="title-content">
        <div className="title">{title}</div>
        <div className="content">
          {data.map(item => {
            return (
              <span>
                {component(
                  item.title,
                  item.term,
                  item.imgUrl,
                  item.redirectUrl,
                  noBackground
                )}
              </span>
            );
          })}
        </div>
      </div>
      <div className="content-detail">
        <ProjectDetailLeft />
      </div>
    </Container>
  );
};

// margin-bottom: 7rem;
// max-width: 900px;
// margin-left: auto;
// margin-right: auto;

// .title {
//   font-size: 1.5rem;
//   text-align: center;
//   margin: 0 0 3rem 0;
//   font-weight: bold;
// }

// .content {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// }

export default ProjectsWrapper;
