import React, { Component } from "react";
import MarkDown from "markdown-to-jsx";
import blogArticleDetail from "pages/blog/blogArticleDetail";
import { fetch } from "redux/action/blogAction";
import { connect } from "react-redux";

class Blog extends Component {
  state = {
    article: this.props.articles
  };

  async componentDidMount() {
    this.props.fetch("blog");
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.articles !== prevState.article) {
      return { article: nextProps.articles };
    }

    return null;
  };

  _redirectToDetail = () => {};

  render() {
    console.log("herere", this.state);
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

const mapDispatchToProps = dispatch => {
  return {
    fetch: category => {
      dispatch(fetch(category));
    }
  };
};

const mapStateToProps = state => {
  return {
    articles: state.blogReducer.articles
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
