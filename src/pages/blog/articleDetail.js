import React, { Component } from "react";
import MarkDown from "markdown-to-jsx";
import { connect } from "react-redux";
import { fetchSelectedArticle } from "redux/action/blogAction";
import axios from "axios";

class articleDetail extends Component {
  state = {
    article: null
  };

  componentDidMount() {
    this.props.fetchSelected(this.props.match.params);
  }

  componentDidUpdate() {
    console.log("fetched url", this.props.selectedArticle[0].url);
    const mdUrl = this.props.selectedArticle[0].url;

    if (!this.state.article) {
      axios.get(mdUrl).then(res => {
        console.log("res", res);
        this.setState({ article: res.data });
      });
    }
  }

  render() {
    return !this.state.article ? (
      <div>loading..</div>
    ) : (
      <MarkDown>{this.state.article}</MarkDown>
    );
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
