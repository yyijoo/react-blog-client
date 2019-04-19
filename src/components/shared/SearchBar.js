import React, { Component } from "react";
import styled from "styled-components";
import * as SearchIcon from "components/shared/searchicon.png";

const SearchBarContainer = styled.div`
  border: 0.5px solid #adadad;
  border-radius: 20px;
  width: 230px;
  height: 35px;
  margin: 4rem auto 10px auto;
  line-height: 35px;
`;

const SearchInput = styled.input`
  border: none;
  margin-left: 20px;
  margin-right: 8px;
`;

const IconImg = styled.img`
  height: auto;
  width: auto;
  max-size: 20px;
  max-height: 20px;
  opacity: 0.4;
  vertical-align: middle;
  margin-right: 10px;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchInput />
      <IconImg src={SearchIcon} />
    </SearchBarContainer>
  );
};

export default SearchBar;
