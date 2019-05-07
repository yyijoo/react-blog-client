import React, { Component, Fragment } from "react";
import SearchBar from "components/shared/SearchBar";
import styled from "styled-components";
import * as tilData from "data/tilData.js";
import TocPopover from "components/til/TocPopover";
import MarkDown from "markdown-to-jsx";
import { fetchTil, showAllTil } from "redux/action/tilAction.js";
import { connect } from "react-redux";
import { Wrapper } from "components/shared/OuterContainer.js";

const TilContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;

const SearchBarDiv = styled.div`
  position: absolute;
  right: 0;
  margin-bottom: 3rem;
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Wrapper>
        <TilContainer>
          {!tilList ? (
            "loading..."
          ) : (
            <Fragment>
              <SearchBarWrapper>
                <button type="button" onClick={() => showAllTil()}>
                  temp btn
                </button>
                <SearchBarDiv>
                  <SearchBar float="right" />
                  <TocPopover content={tilData.tilToc} />
                </SearchBarDiv>
              </SearchBarWrapper>
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
            </Fragment>
          )}
        </TilContainer>
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
  { fetchTil, showAllTil }
)(Til);
