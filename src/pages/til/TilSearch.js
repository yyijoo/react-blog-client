import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import SearchBar from "components/shared/SearchBar";
import styled from "styled-components";
import { showAllTil } from "redux/action/tilAction.js";
import ShowAllButton from "components/til/ShowAllButton";
import TocPopover from "components/til/TocPopover";

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
`;

const SearchResultDiv = styled.div`
  height: 50px;
  width: 400px;
  .show-all-btn {
    position: relative;
  }

  .search-val {
    position: absolute;
    font-size: 24px;
    left: 100px;
    top: 5px;
  }
`;

const SearchBarDiv = styled.div`
  position: absolute;
  right: 0;
  margin-bottom: 3rem;
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
`;

class TilSearch extends Component {
  render() {
    const { showAllTil, searchVal } = this.props;
    return (
      <SearchBarWrapper>
        <SearchResultDiv>
          <span className="show-all-btn">
            {searchVal ? <ShowAllButton clickEvent={showAllTil} /> : ""}
          </span>
          {searchVal ? <span className="search-val">"{searchVal}"</span> : ""}
        </SearchResultDiv>
        <SearchBarDiv>
          <SearchBar float="right" />
          {/* <TocPopover content={tilData.tilToc} /> */}
        </SearchBarDiv>
      </SearchBarWrapper>
    );
  }
}

const mapStateToProps = state => ({
  searchVal: state.tilReducer.searchValue
});

export default connect(
  mapStateToProps,
  { showAllTil }
)(TilSearch);
