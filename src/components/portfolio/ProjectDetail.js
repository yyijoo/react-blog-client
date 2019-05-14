import React, { Component } from "react";
import { projects } from "data/portfolioData";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  width: 80%;

  .pic {
    width: 400px;
    height: auto;
  }

  .title-ci {
    height: 40px;
    width: auto;
    margin-bottom: 1rem;
  }

  .title-text {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .desc {
  }

  ul {
    margin-left: -18px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  li {
    line-height: 1.6;
  }
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
            {/* CI 있을 때만 rendering - business developer용*/}
            {projects[selectedProject].ci ? (
              <img src={projects[selectedProject].ci} className="title-ci" />
            ) : (
              ""
            )}
            {/* Title 있을 때만 rendering - software engineer용*/}
            {projects[selectedProject].title ? (
              <div className="title-text">
                {projects[selectedProject].title}
              </div>
            ) : (
              ""
            )}
            {/* 아래는 항상 rendering */}
            <hr />
            <div className="desc">{projects[selectedProject].desc}</div>
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

// export default ProjectDetail;

// .desc {
//   margin: 3rem 0 2rem 0;
//   line - height: 1.6;
// }

//   .pic {
//   width: 500px;
//   height: auto;
//   margin: 1rem;
// }

//   .pic: first - child {
//   margin - top: 2rem;
// }

// ul {
//   margin - left: -18px;
// }

// li {
//   line - height: 1.6;
// }

// img {
//   height: 60px;
//   width: auto;
// }