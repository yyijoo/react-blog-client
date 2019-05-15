import React from "react";
import { DividedDiv } from "components/shared/DividedDiv.js";
import List from "components/resume/List";
import styled from "styled-components";
// import personIcon from "data/image/person.png";
import descIcon from "data/image/resume/desc.png";
import Icon from "components/resume/Icon";

const ProjectsContent = ({ data }) => {
  const Container = styled.div`
    margin-bottom: 3rem;

    .desc {
      position: relative;

      @media screen and (max-width: 500px) {
        margin-bottom: 1rem;
      }
    }
  `;

  return (
    <Container>
      {data.desc ? (
        <div className="desc">
          <Icon src={descIcon} />
          <div className="desc-line">{data.desc}</div>
        </div>
      ) : (
        ""
      )}
      {data.items ? <List data={data.items} /> : ""}
    </Container>
  );
};

const Projects = ({ data }) => {
  return (
    <div>
      {data.contents.map(contents => (
        <DividedDiv
          leftCategory={{ name: contents.title, term: contents.term }}
          rightContent={<ProjectsContent data={contents} />}
        />
      ))}
    </div>
  );
};

export default Projects;
