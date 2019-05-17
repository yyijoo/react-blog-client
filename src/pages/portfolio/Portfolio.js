import React, { Component } from "react";
import ProjectsWrapper from "components/portfolio/ProjectsWrapper";
import {
  projectAsEngineer,
  projectAsBusinessDeveloper
} from "data/portfolioData.js";
import { Wrapper } from "components/shared/OuterContainer";

class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
        <ProjectsWrapper
          section="software"
          title="As Software Enginner"
          data={projectAsEngineer}
        />
        <ProjectsWrapper
          section="business"
          title="As Business Developer"
          data={projectAsBusinessDeveloper}
          noBackground={true}
        />
      </Wrapper>
    );
  }
}

export default Portfolio;
