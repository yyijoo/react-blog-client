import React, { Component } from "react";
import ProjectItem from "components/portfolio/ProjectItem";
import ProjectsWrapper from "components/portfolio/ProjectsWrapper";
import portfolioData from "data/portfolioData.js";
import NarrowedContainer from "components/shared/OuterContainer";

const returnProjectItem = (title, subtitle, imgURL) => (
  <ProjectItem title={title} subtitle={subtitle} imgURL={imgURL} />
);

class Portfolio extends Component {
  render() {
    return (
      <NarrowedContainer>
        <ProjectsWrapper data={portfolioData} component={returnProjectItem} />
      </NarrowedContainer>
    );
  }
}

export default Portfolio;
