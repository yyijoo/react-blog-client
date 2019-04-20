import React, { Component, Fragment } from "react";
import styled from "styled-components";

const PopoverWrapper = styled.div`
  display: inline-block;
  background: #f2f2f2;
  margin-top: 0.5rem;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 0.8rem;
  position: relative;
`;

const content = content => (
  <PopoverWrapper>
    {content.map(con => (
      <div>{con}</div>
    ))}
  </PopoverWrapper>
);

class TocPopover extends Component {
  state = {
    visible: false
  };

  onClickVisible = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    console.log(this.state.visible);
    return (
      <Fragment>
        <div style={{ fontSize: "0.8rem" }} onClick={this.onClickVisible}>
          TOC
        </div>
        {this.state.visible ? (
          <div>{content(this.props.content) || "no data"}</div>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default TocPopover;
