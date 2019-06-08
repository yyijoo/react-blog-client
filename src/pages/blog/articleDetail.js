import React, { Component } from "react";
import MarkDown from "markdown-to-jsx";
import { connect } from "react-redux";
import { fetchSelectedArticle } from "redux/action/blogAction";

class articleDetail extends Component {
  state = {
    article: null
  };

  async componentDidMount() {
    this.props.fetchSelected(this.props.match.params);
  }
  render() {
    console.log("shows match.params", this.props.match.params);
    console.log(this.props, "props");
    return <div />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSelected: _id => {
      dispatch(fetchSelectedArticle(_id));
    }
  };
};

const mapStateToProps = state => {
  return {
    selectedArticle: state.blogReducer.selectedArticle
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(articleDetail);
