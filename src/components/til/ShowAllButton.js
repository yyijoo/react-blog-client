import React, { Component } from "react";
import styled from "styled-components";
import back from "data/image/back.png";

const Button = styled.div`
  background: #e5e5e5;
  padding: 3px;
  height: 12px;
  width: max-content;
  font-size: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 5px;
  top: 10px;
`;

const Icon = styled.img`
  max-height: 80%;
  width: auto;
  margin-left: 2px;
`;

export default class showAllBtn extends Component {
  render() {
    return (
      <Button onClick={() => this.props.clickEvent()}>
        <span>SHOW ALL</span> <Icon src={back} />
      </Button>
    );
  }
}
