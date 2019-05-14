import React, { Component } from "react";
import { projects } from "data/portfolioData";
import styled from "styled-components";
import { connect } from "react-redux";
import AlinkWithIcon from "components/portfolio/AlinkWithIcon";

const Container = styled.div`
  font-size: 1rem;
  .pic {
    width: 70%;
    height: auto;
  }

  .title-ci {
    height: 40px;
    width: auto;
    font-size: 24px;
    padding-bottom: -1rem;
  }

  .title-text {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .desc {
    margin-bottom: 2rem;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 0;
    margin-block-end: 2rem;
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

class ProjectDetail extends Component {
  render() {
    const { selectedProject } = this.props;
    return (
      <Container>
        {!selectedProject ? (
          ""
        ) : (
          <div>
            {/* CI 있을 때만 rendering - business developer 영역*/}
            {projects[selectedProject].ci ? (
              <img src={projects[selectedProject].ci} className="title-ci" />
            ) : (
              ""
            )}
            {/* Title 있을 때만 rendering - software engineer 영역*/}
            {projects[selectedProject].title ? (
              <div className="title-text">
                {projects[selectedProject].title}
              </div>
            ) : (
              ""
            )}

            {/* 아래는 software & business 영역 공통 */}
            <Hr />
            <div className="desc">{projects[selectedProject].desc}</div>
            {/* 아래는 url 있는 경우에만 rendering */}
            {projects[selectedProject].urls
              ? projects[selectedProject].urls.map(url => (
                  <div>
                    {console.log("url", url)}
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
)(ProjectDetail);
