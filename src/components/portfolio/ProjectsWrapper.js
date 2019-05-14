import React, { Fragment, Component } from "react";
import styled from "styled-components";
import ProjectDetail from "components/portfolio/projectDetailLeft";
import { connect } from "react-redux";

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
    margin-left: 8rem;
  }
`;

const ProjectDetailDiv = styled.div`
  min-width: 600px;
  margin-left: 8rem;

  display: ${props => (props.isSelected ? "" : "none")};
`;

class ProjectsWrapper extends Component {
  render() {
    const {
      section,
      title,
      data,
      component,
      noBackground,
      selectedProjectSection
    } = this.props;
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
        <ProjectDetailDiv isSelected={section === selectedProjectSection}>
          <ProjectDetail />
        </ProjectDetailDiv>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  let selectedProjectSection;

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
    selectedProjectSection: selectedProjectSection
  };
};

export default connect(
  mapStateToProps,
  null
)(ProjectsWrapper);
