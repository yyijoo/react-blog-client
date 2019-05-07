import React, { Component } from "react";
import { NarrowedContainer } from "components/shared/OuterContainer";
import { projects } from "data/portfolioData";
import styled from "styled-components";

const Container = styled.div`
  .desc {
    margin: 3rem 0 2rem 0;
    line-height: 1.6;
  }

  .pic {
    width: 500px;
    height: auto;
    margin: 1rem;
  }

  .pic:first-child {
    margin-top: 2rem;
  }

  ul {
    margin-left: -18px;
  }

  li {
    line-height: 1.6;
  }

  img {
    height: 60px;
    width: auto;
  }
`;

class ProjectDetail extends Component {
  render() {
    const selectedProject = this.props.match.params.project;
    return (
      <NarrowedContainer width="60%">
        <Container>
          <img src={projects[selectedProject].ci || ""} />
          <div className="desc">{projects[selectedProject].desc}</div>
          <ul>
            {projects[selectedProject].items.map(item => (
              <li>{item}</li>
            ))}
          </ul>
          <div>
            {projects[selectedProject].pics
              ? projects[selectedProject].pics.map(pic => (
                  <img className="pic" src={pic} />
                ))
              : ""}
          </div>
        </Container>
      </NarrowedContainer>
    );
  }
}

export default ProjectDetail;
