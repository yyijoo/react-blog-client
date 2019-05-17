import React, { Fragment, Component } from "react";
import styled from "styled-components";
import ProjectDetail from "components/portfolio/projectDetail";
import ProjectDetailForMobile from "components/portfolio/projectDetailForMobile";
import { connect } from "react-redux";
import ProjectList from "components/portfolio/ProjectList";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 6rem;
  margin-bottom: 8rem;
`;

const ProjectListDiv = styled.div`
  min-width: 300px;

  @media screen and (max-width: 500px) {
    min-width: 100%;
  }

  .title {
    font-size: 24px;
    margin-bottom: 2rem;
    font-weight: bold;
  }
`;

const ProjectDetailDiv = styled.div`
  width: 100%;
  margin-left: 4rem;
  display: ${props => (props.isSelected ? "" : "none")};
`;

class ProjectsWrapper extends Component {
  render() {
    const {
      section,
      title,
      data,
      noBackground,
      selectedProject,
      selectedProjectSection
    } = this.props;
    return (
      <Container>
        <ProjectListDiv>
          <div className="title">{title}</div>
          {data.map(item => {
            return (
              <Fragment>
                <span>
                  <ProjectList
                    title={item.title}
                    subtitle={item.term}
                    imgUrl={item.imgUrl}
                    redirectUrl={item.redirectUrl}
                    noBackground={noBackground}
                    isSelected={item.key === selectedProject}
                  />
                </span>
                {item.key === selectedProject ? <ProjectDetailForMobile /> : ""}
              </Fragment>
            );
          })}
        </ProjectListDiv>
        <ProjectDetailDiv isSelected={section === selectedProjectSection}>
          <ProjectDetail />
        </ProjectDetailDiv>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  let selectedProjectSection;

  // 선택한 프로젝트가 software enginner 영역인지 business developer 인지 판단
  if (
    state.portfolioReducer.selectedProject === "psq" ||
    state.portfolioReducer.selectedProject === "kakao"
  ) {
    selectedProjectSection = "business";
  } else {
    selectedProjectSection = "software";
  }
  return {
    ...state,
    selectedProject: state.portfolioReducer.selectedProject,
    selectedProjectSection: selectedProjectSection
  };
};

export default connect(
  mapStateToProps,
  null
)(ProjectsWrapper);
