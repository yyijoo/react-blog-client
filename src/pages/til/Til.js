import React, { Component, Fragment } from "react";
import styled from "styled-components";
import MarkDown from "markdown-to-jsx";
import { fetchTil, fetchTilFromLocalFile } from "redux/action/tilAction.js";
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
  margin-bottom: 3rem;
  max-width: 900px;
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
`;

const TilContentRight = styled.div`
  margin-left: 2rem;
`;

// ::::::::::::::::::::::::::::::::::::::::::::::::::::: //

class Til extends Component {
  async componentDidMount() {
    this.props.fetchTilFromLocalFile();
  }

  render() {
    const { tilList, searchResult } = this.props;

    let content = tilList;

    if (searchResult !== "") {
      content = searchResult;
    }
    console.log("til rerendered", this.state);

    return (
      <Wrapper>
        <TilContainer>
          <TilSearch />
          {!tilList ? (
            "loading..."
          ) : (
            <Fragment>
              {content.map(til => {
                return (
                  <TilContentDiv>
                    <TilContentLeft>
                      <div className="left-title">
                        <div className="week">{til.week}주</div>
                        <span className="period">{til.date}</span>
                      </div>
                    </TilContentLeft>
                    <TilContentRight>
                      <MarkDown>{til.content}</MarkDown>
                    </TilContentRight>
                    {/* <TilContentRight>{""}</TilContentRight> */}
                  </TilContentDiv>
                );
              })}
              {/* {!this.state.posts ? (
                ""
              ) : (
                <div>
                  {this.state.posts.map(post => (
                    <MarkDown>{post}</MarkDown>
                  ))}
                </div>
              )} */}
            </Fragment>
          )}
        </TilContainer>
        <button
          onClick={() => {
            console.log(one);
            addTil(one);
          }}
        >
          add til
        </button>
        {/* <MarkDown>{this.state.post ? this.state.post : ""}</MarkDown> */}
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
  { fetchTil, fetchTilFromLocalFile }
)(Til);
