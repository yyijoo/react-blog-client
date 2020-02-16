import React, { Component, Fragment } from "react";
import styled from "styled-components";
import MarkDown from "markdown-to-jsx";
// import { fetchTil } from "redux/action/tilAction.js";
import { connect } from "react-redux";
import { Wrapper } from "components/shared/OuterContainer.js";
import TilSearch from "pages/til/TilSearch";
import { addTil } from "utils/api";

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
  min-height: 110px;
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

const YearFilterDiv = styled.div`
  width: 100%;
  text-align: right;
  font-size: 0.8rem;
`;

const YearSpan = styled.span`
  border-radius: 4px;
  background-color: ${props => (props.selected ? "#0071CB" : "none")};
  color: ${props => (props.selected ? "white" : "black")};
  padding: 2px 5px;
  margin-left: 4px;
`;

const showOneWeekTil = til => (
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

// ::::::::::::::::::::::::::::::::::::::::::::::::::::: //

class Til extends Component {
  state = {
    posts: [],
    selectedYearArr: [2020]
  };

  getLastYearTilData = async () => {
    const markdownContext = require.context(
      `data/markdown-til/2019`,
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

    return posts;
  };

  getThisYearTilData = async () => {
    const markdownContext = require.context(
      `data/markdown-til/2020`,
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

    return posts;
  };

  componentDidMount = async () => {
    const posts = await this.getThisYearTilData();
    const newPosts = [posts];
    this.setState({
      ...this.state,
      posts: newPosts
    });
  };

  handleSelectYear = async year => {
    const newPosts = [];
    const newSelectedYearArr = [];

    if (year === 2020) {
      const posts = await this.getThisYearTilData();
      newPosts.push(posts);
      newSelectedYearArr.push(2020);
    }
    if (year === 2019) {
      const posts = await this.getLastYearTilData();
      newPosts.push(posts);
      newSelectedYearArr.push(2019);
    }

    this.setState({
      ...this.state,
      posts: newPosts,
      selectedYearArr: newSelectedYearArr
    });
  };

  render() {
    const { tilList, searchResult } = this.props;
    const { posts, selectedYearArr } = this.state;
    let content = tilList;

    if (searchResult !== "") {
      content = searchResult;
    }

    return (
      <Wrapper>
        <TilContainer>
          {/* <TilSearch /> */}
          {!posts && "loading..."}
          {posts && (
            <Fragment>
              <YearFilterDiv>
                Year:
                <YearSpan
                  selected={selectedYearArr.includes(2020)}
                  onClick={() => this.handleSelectYear(2020)}
                >
                  2020
                </YearSpan>
                <YearSpan
                  selected={selectedYearArr.includes(2019)}
                  onClick={() => this.handleSelectYear(2019)}
                >
                  2019
                </YearSpan>
              </YearFilterDiv>
              {posts.map(oneYearTil => {
                return oneYearTil.map(til => showOneWeekTil(til));
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

export default connect(mapStateToProps, null)(Til);
