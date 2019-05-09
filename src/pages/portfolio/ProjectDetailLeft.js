import React, { Component } from "react";
import { NarrowedContainer } from "components/shared/OuterContainer";
import { projects } from "data/portfolioData";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  .pic {
    width: 400px;
    height: auto;
  }
  .ci {
    height: 40px;
    width: auto;
    margin-top: 1rem;
  }

  .desc {
    margin-top: 1rem;
  }

  ul {
    margin-left: -18px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  li {
    line-height: 1.6;
  }
`;

class ProjectDetail extends Component {
  render() {
    const selectedProject = "cswebsite";
    return (
      <Container>
        <img src={projects[selectedProject].ci || ""} className="ci" />
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
    );
  }
}

export default ProjectDetail;

// .desc {
//   margin: 3rem 0 2rem 0;
//   line - height: 1.6;
// }

//   .pic {
//   width: 500px;
//   height: auto;
//   margin: 1rem;
// }

//   .pic: first - child {
//   margin - top: 2rem;
// }

// ul {
//   margin - left: -18px;
// }

// li {
//   line - height: 1.6;
// }

// img {
//   height: 60px;
//   width: auto;
// }
