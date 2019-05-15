import React, { Component } from "react";
import { projects } from "data/portfolioData";
import styled from "styled-components";
import { connect } from "react-redux";
import AlinkWithIcon from "components/portfolio/AlinkWithIcon";

const Container = styled.div`
  @media screen and (min-width: 500px) {
    display: none;
  }

  margin-top: -1rem;

  font-size: 1rem;
  .pic {
    width: 100%;
    height: auto;
  }

  .title-ci {
    height: 40px;
    width: auto;
    font-size: 24px;
    padding-bottom: -1rem;
  }

  .desc {
    margin-bottom: 2rem;

    @media screen and (max-width: 500px) {
      margin-bottom: 1rem;
    }
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 20px;
  }

  li {
    line-height: 1.6;
  }
`;

const Hr = styled.hr`
  border: 0.5px solid rgb(48, 48, 48, 0.2);
  margin-top: 2px;
`;

class ProjectDetailForMobile extends Component {
  render() {
    const { selectedProject } = this.props;
    return (
      <Container>
        {!selectedProject ? (
          ""
        ) : (
          <div>
            {/* 아래는 software & business 영역 공통 */}
            <Hr />
            <div className="desc">{projects[selectedProject].desc}</div>
            {/* 아래는 url 있는 경우에만 rendering */}
            {projects[selectedProject].urls
              ? projects[selectedProject].urls.map(url => (
                  <div>
                    <AlinkWithIcon url={url} />
                  </div>
                ))
              : ""}

            <ul>
              {projects[selectedProject].items.map(item => (
                <li>{item}</li>
              ))}
            </ul>
            <div>
              {projects[selectedProject].pics
                ? projects[selectedProject].pics.map(pic => (
                    <img className="pic" src={pic} />
                  ))
                : ""}
            </div>
            <Hr />
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedProject: state.portfolioReducer.selectedProject
  };
};

export default connect(
  mapStateToProps,
  null
)(ProjectDetailForMobile);
