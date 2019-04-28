import React, { Fragment } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  width: ${props => (props.size ? props.size.width : "430px")};
  height: ${props => (props.size ? props.size.height : "210px")};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .translucent-img {
    background: ${props => (props.imgURL ? `url(${props.imgURL})` : "")};
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  .main-title {
    font-size: 1.2rem;
    background: white;
    padding: 3px;
  }

  .sub-title {
    font-size: 0.7rem;
    margin-top: 1rem;
  }

  .color:hover {
    background-color: red;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;

const ProjectItem = ({ title, subtitle, imgURL }) => {
  return (
    <Fragment>
      <ItemContainer imgURL={imgURL}>
        <div className="translucent-img" />
        <div className="color" />
        <div className="main-title">{title}</div>
        <div className="sub-title">{subtitle}</div>
      </ItemContainer>
    </Fragment>
  );
};

export default ProjectItem;
