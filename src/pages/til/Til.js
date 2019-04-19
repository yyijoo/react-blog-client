import React, { Component } from "react";
import SearchBar from "components/shared/SearchBar";
import styled from "styled-components";
import tilData from "data/tilData.js";

const TilContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SearchBarDiv = styled.div`
  width: 100%;
  height: 10rem;
  text-align: center;

  .toc-button {
    font-size: 0.8rem;
  }
`;

const TilContentLeft = styled.div`
  border: 1px solid white;
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
  flex: 4;
`;

const TilContentRight = styled.div`
  flex: 2;
`;

class Til extends Component {
  render() {
    return (
      <TilContainer>
        <SearchBarDiv>
          <SearchBar />
          <span className="toc-button">TOC</span>
        </SearchBarDiv>
        <TilContentLeft>
          <div className="left-title">
            <div className="week">{tilData[0].week}주</div>
            <span className="period">{tilData[0].period}</span>
          </div>
        </TilContentLeft>
        <TilContentCenter>{tilData[0].content}</TilContentCenter>
        <TilContentRight>{""}</TilContentRight>
      </TilContainer>
    );
  }
}

export default Til;
