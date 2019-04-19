import React, { Component } from "react";
import SearchBar from "components/shared/SearchBar";
import styled from "styled-components";

const TilWrapper = styled.div`
  display: flex;
`;

const SearchBarDiv = styled.div`
  width: 100%;
  height: 8rem;
  border: 1px solid red;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 100%;
`;

const TilContentWrapper = styled.div`
  border: 1px solid blue;
  background: blue;
`;

class Til extends Component {
  render() {
    return (
      <TilWrapper>
        <SearchBarDiv>
          <SearchBar />
        </SearchBarDiv>
        <TilContentWrapper>으음</TilContentWrapper>
      </TilWrapper>
    );
  }
}

export default Til;
