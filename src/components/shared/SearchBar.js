import React, { Component } from "react";
import styled from "styled-components";
import SearchIcon from "data/image/shared/searchicon.png";
import { searchTil } from "redux/action/tilAction.js";
import { connect } from "react-redux";

const SearchBarContainer = styled.div`
  border: 0.5px solid #adadad;
  border-radius: 20px;
  width: 230px;
  height: 35px;
  line-height: 35px;
  float: ${props => (props.float ? props.float : "")};
`;

const SearchInput = styled.input`
  border: none;
  margin-left: 20px;
  margin-right: 8px;
`;

const ButtonWithIcon = ({ searchVal, submitFunc }) => {
  const Button = styled.button.attrs({ type: "button" })`
    background: none;
    border: none;
    padding: 0;
  `;

  const IconImg = styled.img`
    height: auto;
    width: auto;
    max-size: 20px;
    max-height: 20px;
    opacity: 0.4;
    vertical-align: middle;
  `;
  return (
    <Button
      onClick={() => {
        submitFunc(searchVal);
      }}
    >
      <IconImg src={SearchIcon} />
    </Button>
  );
};

class SearchBar extends Component {
  state = {
    searchVal: ""
  };

  render() {
    const { searchTil, float } = this.props;
    const { searchVal } = this.state;
    return (
      <SearchBarContainer float={float}>
        <SearchInput
          onChange={e => this.setState({ searchVal: e.target.value })}
        />
        <ButtonWithIcon searchVal={searchVal} submitFunc={searchTil} />
      </SearchBarContainer>
    );
  }
}

export default connect(
  null,
  { searchTil }
)(SearchBar);
