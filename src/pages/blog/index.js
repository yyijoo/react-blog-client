import React, { Component } from "react";
import MarkDown from "markdown-to-jsx";
import md from "data/markdown-blog/2019-05-28-test.md";

class Blog extends Component {
  async componentDidMount() {
    const post = await fetch(md).then(res => res.text());
    console.log("post", post);
  }

  render() {
    return <MarkDown>{md}</MarkDown>;
  }
}

export default Blog;
