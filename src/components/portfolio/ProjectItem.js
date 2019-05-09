import React, { Fragment, Component } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  width: ${props => (props.size ? props.size.width : "430px")};
  height: ${props => (props.size ? props.size.height : "210px")};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-self: stretch;
  margin-bottom: 40px;
  border: ${props => (props.imgURL ? "" : "1px solid #d6d6d6")};

  .translucent-img {
    background: ${props => (props.imgURL ? `url(${props.imgURL})` : "white")};
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

  img {
    width: 100px;
    height: auto;
  }
`;

const handlePageChange = project => {
  console.log("why");
  window.location.hash = `#/portfolio/${project}`;
};

// class ProjectItem extends Component {
//   state = {
//     title: this.props.title,
//     subtitle: this.props.subtitle,
//     imgUrl: this.props.imgUrl,
//     redirectUrl: this.props.redirectUrl
//   };

//   handlePageChange() {
//     console.log(this.state.redirectUrl, "hrere");
//     window.location.hash = `#/portfolio/${this.state.redirectUrl}`;
//   }

//   render() {
//     return (
//       <Fragment>
//         <ItemContainer
//           imgURL={this.state.imgUrl}
//           onClick={() => this.handlePageChange()}
//         >
//           <div className="translucent-img" />
//           <div className="color" />
//           <div className="main-title">{this.state.title}</div>
//           <div className="sub-title">{this.state.subtitle}</div>
//         </ItemContainer>
//       </Fragment>
//     );
//   }
// }

const ProjectItem = ({
  title,
  subtitle,
  imgUrl,
  redirectUrl,
  noBackground
}) => {
  return (
    <Fragment>
      <ItemContainer
        imgURL={noBackground ? "" : imgUrl}
        onClick={() => handlePageChange(redirectUrl)}
      >
        <div className="translucent-img" />
        <div className="color" />
        {noBackground ? (
          <img src={title} />
        ) : (
          <div className="main-title">{title}</div>
        )}
        <div className="sub-title">{subtitle}</div>
      </ItemContainer>
    </Fragment>
  );
};

export default ProjectItem;
