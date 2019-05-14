import React, { Fragment, Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectProject } from "redux/action/portfolioAction";

const ItemContainer = styled.div`
  width: 200px;
  margin-bottom: 1.5rem;

  .main-title {
    font-size: 18px;
  }

  .sub-title {
    font-size: 10px;
  }
`;

const ProjectItem = ({
  title,
  subtitle,
  imgUrl,
  redirectUrl,
  noBackground,
  selectProject
}) => {
  return (
    <Fragment>
      <ItemContainer
        imgURL={noBackground ? "" : imgUrl}
        onClick={() => selectProject(redirectUrl)}
      >
        <div className="translucent-img" />
        <div className="color" />
        <div className="main-title">{title}</div>
        <div className="sub-title">{subtitle}</div>
      </ItemContainer>
    </Fragment>
  );
};

export default connect(
  null,
  { selectProject }
)(ProjectItem);
