import React, { Fragment, Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectProject } from "redux/action/portfolioAction";

const ItemContainer = styled.div`
  margin-bottom: 1.5rem;

  @media screen and (max-width: 500px) {
    width: max-content;
  }

  .main-title {
    font-size: 18px;
    display: inline;
    ${props => console.log("props", props)}
    font-weight: ${props => (props.isSelected ? "bold;" : "")};
    color: ${props => (props.isSelected ? "white" : "")}
    background-color: #303030;
  }

  .sub-title {
    font-size: 10px;

    @media screen and (max-width: 500px) {
      display: inline;
    }
  }

  .main-sub-title-divider {
    display: none;
    @media screen and (max-width: 500px) {
      display: inline;
      margin: 0.5rem;
    }
  }
`;

const ProjectItem = ({
  title,
  subtitle,
  imgUrl,
  redirectUrl,
  noBackground,
  isSelected,
  selectProject,
  selectedProject
}) => {
  return (
    <Fragment>
      <ItemContainer
        imgURL={noBackground ? "" : imgUrl}
        onClick={() => {
          if (selectedProject !== null) {
            selectProject(null);
          } else {
            selectProject(redirectUrl);
          }
        }}
        isSelected={isSelected}
      >
        <div className="translucent-img" />
        <div className="color" />
        <div className="main-title">{title}</div>
        <div className="main-sub-title-divider">-</div>
        <div className="sub-title">{subtitle}</div>
      </ItemContainer>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedProject: state.portfolioReducer.selectedProject
  };
};

export default connect(
  mapStateToProps,
  { selectProject }
)(ProjectItem);
