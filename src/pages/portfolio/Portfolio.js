import React, { Component } from "react";
import ProjectItem from "components/portfolio/ProjectItem";
import ProjectsWrapper from "components/portfolio/ProjectsWrapper";
import {
  projectAsEngineer,
  projectAsBusinessDeveloper
} from "data/portfolioData.js";
import { NarrowedContainer } from "components/shared/OuterContainer";

const returnProjectItem = (
  title,
  subtitle,
  imgUrl,
  redirectUrl,
  noBackground
) => (
  <ProjectItem
    title={title}
    subtitle={subtitle}
    imgUrl={imgUrl}
    redirectUrl={redirectUrl}
    noBackground={noBackground}
  />
);

class Portfolio extends Component {
  render() {
    return (
      <NarrowedContainer>
        <ProjectsWrapper
          title="As Software Enginner"
          data={projectAsEngineer}
          component={returnProjectItem}
        />
        <ProjectsWrapper
          title="As Business Developer"
          data={projectAsBusinessDeveloper}
          component={returnProjectItem}
          noBackground={true}
        />
      </NarrowedContainer>
    );
  }
}

export default Portfolio;
