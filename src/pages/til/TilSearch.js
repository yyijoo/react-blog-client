import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import SearchBar from "components/shared/SearchBar";
import styled from "styled-components";
import { showAllTil } from "redux/action/tilAction.js";

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

const SearchResultDiv = styled.div`
  position: absolute;
  margin-bottom: 3rem;
`;

class TilSearch extends Component {
  render() {
    const { showAllTil } = this.props;
    return (
      <SearchBarWrapper>
        <SearchResultDiv>
          <button type="button" onClick={() => showAllTil()}>
            temp btn
          </button>
        </SearchResultDiv>
        <SearchBarDiv>
          <SearchBar float="right" />
          {/* <TocPopover content={tilData.tilToc} /> */}
        </SearchBarDiv>
      </SearchBarWrapper>
    );
  }
}

export default connect(
  null,
  { showAllTil }
)(TilSearch);
