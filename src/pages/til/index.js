import React, { Component, Fragment } from "react";
import styled from "styled-components";
import MarkDown from "markdown-to-jsx";
// import { fetchTil } from "redux/action/tilAction.js";
import { connect } from "react-redux";
import { Wrapper } from "components/shared/OuterContainer.js";
import TilSearch from "pages/til/TilSearch";
import { addTil } from "components/shared/api";

// ::::::::::::::::::: Define style ::::::::::::::::::: //

const TilContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TilContentDiv = styled.div`
  display: flex;
  margin-bottom: 5rem;
  line-height: 1.7;

  a {
    word-wrap: break-word;
  }

  @media screen and (max-width: 500px) {
    width: 90vw;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const TilContentLeft = styled.div`
  min-width: 100px;
  position: relative;
  padding-top: 1rem;

  .left-title {
    position: absolute;
    text-align: center;
  }

  .week {
    font-size: 1.5rem;
  }

  .period {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;

    .left-title {
      position: static;
    }
  }
`;

const TilContentRight = styled.div`
  margin-left: 7rem;
  width: 800px;
  @media screen and (max-width: 500px) {
    margin: 0;
    width: 100%;
  }
`;

// ::::::::::::::::::::::::::::::::::::::::::::::::::::: //

class Til extends Component {
  state = {
    posts: null
  };

  async componentDidMount() {
    const markdownContext = require.context(
      "data/markdown-til",
      false,
      /\.md$/
    ); // 한 폴더에 있는 모든 파일을 불러왔다.
    const markdownFiles = markdownContext.keys(); // 폴더 이름을 arr로 뽑았다.

    const posts = await Promise.all(
      markdownFiles.map(async file => {
        const filenameArr = file.split("-");
        const post = {};
        post.week = filenameArr[0].slice(2);
        post.date = filenameArr[1] + "-" + filenameArr[2].slice(0, -3);

        const fetchedText = await fetch(markdownContext(file)).then(res =>
          res.text()
        );

        post.content = fetchedText;

        return post;
      })
    );

    posts.sort((ele, nextEle) => nextEle.week - ele.week);

    this.setState({ posts });
  }

  render() {
    const { tilList, searchResult } = this.props;

    let content = tilList;

    if (searchResult !== "") {
      content = searchResult;
    }
    return (
      <Wrapper>
        <TilContainer>
          {/* <TilSearch /> */}
          {!this.state.posts ? (
            "loading..."
          ) : (
            <Fragment>
              {this.state.posts.map(til => {
                return (
                  <TilContentDiv>
                    <TilContentLeft>
                      <div className="left-title">
                        <div className="week">{til.week}주</div>
                        <span className="period">{til.date}</span>
                      </div>
                    </TilContentLeft>
                    <TilContentRight>
                      <MarkDown className="markdown">{til.content}</MarkDown>
                    </TilContentRight>
                  </TilContentDiv>
                );
              })}
            </Fragment>
          )}
        </TilContainer>
        {/* <button
          onClick={() => {
            console.log(one);
            addTil(one);
          }}
        >
          add til
        </button> */}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.tilReducer.loading,
    tilList: state.tilReducer.tils,
    searchResult: state.tilReducer.searchResult
  };
};

export default connect(
  mapStateToProps,
  null
)(Til);
