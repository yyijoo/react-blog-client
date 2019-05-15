import React, { Component } from "react";
import ProjectItem from "components/portfolio/ProjectItem";
import ProjectsWrapper from "components/portfolio/ProjectsWrapper";
import {
  projectAsEngineer,
  projectAsBusinessDeveloper
} from "data/portfolioData.js";
import { Wrapper } from "components/shared/OuterContainer";

const returnProjectItem = (
  title,
  subtitle,
  imgUrl,
  redirectUrl,
  noBackground,
  isSelected
) => (
  <ProjectItem
    title={title}
    subtitle={subtitle}
    imgUrl={imgUrl}
    redirectUrl={redirectUrl}
    noBackground={noBackground}
    isSelected={isSelected}
  />
);

class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
        <ProjectsWrapper
          section="software"
          title="As Software Enginner"
          data={projectAsEngineer}
          component={returnProjectItem}
        />
        <ProjectsWrapper
          section="business"
          title="As Business Developer"
          data={projectAsBusinessDeveloper}
          component={returnProjectItem}
          noBackground={true}
        />
      </Wrapper>
    );
  }
}

export default Portfolio;
