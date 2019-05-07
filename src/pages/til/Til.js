import React, { Component, Fragment } from "react";
import SearchBar from "components/shared/SearchBar";
import styled from "styled-components";
import * as tilData from "data/tilData.js";
import TocPopover from "components/til/TocPopover";
import MarkDown from "markdown-to-jsx";
import { fetchTil, showAllTil } from "redux/action/tilAction.js";
import { connect } from "react-redux";

const TilContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SearchBarDiv = styled.div`
  width: 100%;
  height: 10rem;
  text-align: center;
`;

const TilContentDiv = styled.div`
  display: flex;
  margin-bottom: 3rem;
  width: 100%;
`;

const TilContentLeft = styled.div`
  flex: 2;
  position: relative;

  .left-title {
    position: absolute;
    right: 8rem;
    text-align: center;
  }

  .week {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  .period {
    font-size: 0.8rem;
  }
`;

const TilContentCenter = styled.div`
  flex: 3.5;
`;

const TilContentRight = styled.div`
  flex: 2;
`;

class Til extends Component {
  componentDidMount() {
    console.log("did mount in TIL");
    this.props.fetchTil();
  }
  render() {
    const { loading, tilList, searchResult, showAllTil } = this.props;

    let content = tilList;

    if (searchResult !== "") {
      content = searchResult;
    }
    console.log("til rerendered");

    return (
      <TilContainer>
        {!tilList ? (
          "loading..."
        ) : (
          <Fragment>
            <SearchBarDiv>
              <SearchBar />
              <TocPopover content={tilData.tilToc} />
              <button type="button" onClick={() => showAllTil()}>
                temp btn
              </button>
            </SearchBarDiv>
            {content.map(til => {
              return (
                <TilContentDiv>
                  <TilContentLeft>
                    <div className="left-title">
                      <div className="week">{til.week}주</div>
                      <span className="period">{til.date}</span>
                    </div>
                  </TilContentLeft>
                  <TilContentCenter>
                    <MarkDown>{til.content}</MarkDown>
                  </TilContentCenter>
                  <TilContentRight>{""}</TilContentRight>
                </TilContentDiv>
              );
            })}
          </Fragment>
        )}
      </TilContainer>
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
  { fetchTil, showAllTil }
)(Til);
