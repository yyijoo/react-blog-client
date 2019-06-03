import React, { Component } from "react";
import MarkDown from "markdown-to-jsx";
import md from "data/markdown-blog/2019-05-28-test.md";
// import { Markdown } from "react-showdown";
import axios from "axios";
import blogArticleDetail from "pages/blog/blogArticleDetail";

var Converter = require("react-showdown").Converter;
var converter = new Converter();

class Blog extends Component {
  state = {
    article: null
  };
  async componentDidMount() {
    // const post = await fetch(md).then(res => res.text());

    // const postFromS3 = await axios
    //   .get(
    //     "https://s3.ap-northeast-2.amazonaws.com/jooyeonyi.com/blog/%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.md"
    //     // { "Access-Control-Allow-Origin": "*" }
    //   )
    //   .then(res => {
    //     console.log("here", res.data);
    //     this.setState({ article: res.data });
    //   });

    const getData = await axios
      .get("http://localhost:8080/api/blogs")
      .then(res => {
        this.setState({ article: res.data });
      });
  }

  _redirectToDetail = () => {};

  render() {
    if (this.state.article) {
      return (
        <div>
          {this.state.article.map(ele => (
            <div>
              {ele.title}
              <blogArticleDetail url={ele.url} />
            </div>
          ))}
        </div>
      );
    }
    return <div>ㅇ</div>;
    // return <MarkDown>{md.body}</MarkDown>;
  }
}

export default Blog;
