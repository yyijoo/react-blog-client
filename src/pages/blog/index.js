import React, { Component } from "react";
import { fetch } from "redux/action/blogAction";
import { connect } from "react-redux";
import { Wrapper } from "components/shared/OuterContainer.js";
import styled from "styled-components";

const showListItem = item => {
  const imgUrl = `https://images.ctfassets.net/dfutqpxkg76k/3OUoFqPysjzMhFIVEIfXCt/6ed4a418e5a643b3e78e865f26ca9843/1.jpeg`;
  return (
    <div>
      <div>{item.postTitle}</div>
      <span>{item.createdAt}</span>{" "}
      <span>{item.postTags && item.postTags.map(tag => tag)}</span>
      <img src={imgUrl} />
    </div>
  );
};

class Blog extends Component {
  state = {};

  async componentDidMount() {
    this.props.fetch("blog");
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    console.log("nextProps", nextProps.posts);
    if (nextProps.posts !== prevState.posts) {
      return { posts: nextProps.posts };
    }

    return null;
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts && <Wrapper>{posts.map(post => showListItem(post))}</Wrapper>}
        {!posts && <div>loading</div>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: category => {
      dispatch(fetch(category));
    }
  };
};

const mapStateToProps = state => {
  return {
    posts: state.blogReducer.posts
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
