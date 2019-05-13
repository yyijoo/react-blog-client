import React from "react";
import { DividedDiv } from "components/shared/DividedDiv.js";
import List from "components/resume/List";
import styled from "styled-components";
import personIcon from "data/image/person.png";
import descIcon from "data/image/desc.png";

const ProjectsContent = ({ data }) => {
  const Container = styled.div`
    margin-bottom: 3rem;

    .desc {
      position: relative;
    }
  `;

  const Icon = styled.img`
    width: 18px;
    height: auto;
    position: absolute;
    top: 3px;
    left: -25px;
    z-index: -1;
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
