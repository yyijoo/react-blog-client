import React, { Component } from "react";
import MarkDown from "markdown-to-jsx";
import axios from "axios";
import { connect } from "react-redux";

class articleDetail extends Component {
  state = {
    article: null
  };

  async componentDidMount() {}
  render() {
    console.log("shows match.params", this.props.match.params);
    return <div />;
  }
}

const mapStateToProps = state => {};

export default connect()(articleDetail);
