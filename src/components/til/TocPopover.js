import React, { Component, Fragment } from "react";
import styeld from "styled-components";

class TocPopover extends Component {
  state = {
    visible: false
  };

  render() {
    return (
      <Fragment>
        <span style={{ fontSize: "0.8rem" }}>TOC</span>
        <div>test</div>
      </Fragment>
    );
  }
}

export default TocPopover;
