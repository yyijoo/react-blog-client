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

const ProjectLists = ({
  title,
  subtitle,
  imgUrl,
  redirectUrl,
  noBackground,
  isSelected,
  selectProject
}) => {
  return (
    <Fragment>
      <ItemContainer
        imgURL={noBackground ? "" : imgUrl}
        onClick={() =>
          isSelected ? selectProject(null) : selectProject(redirectUrl)
        }
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

export default connect(
  null,
  { selectProject }
)(ProjectLists);
