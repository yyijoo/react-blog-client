import React, { Component } from "react";
import MarkDown from "markdown-to-jsx";
import articleDetail from "pages/blog/articleDetail";
import { fetch } from "redux/action/blogAction";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { Wrapper } from "components/shared/OuterContainer.js";

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

  _redirectToDetail = () => <Redirect to="test" />; // _id로 url을 연결한다. component는 articleDetail
  // _redirectToDetail = () => console.log("clicked"); // _id로 url을 연결한다. component는 articleDetail

  render() {
    console.log("herere", this.state, this.props);
    if (this.state.article) {
      return (
        <Wrapper>
          {this.state.article.map(ele => (
            <div key={ele._id} onClick={() => this._redirectToDetail()}>
              <Link to={`/blog/${ele._id}`}>{ele.title}</Link>
            </div>
          ))}
        </Wrapper>
      );
    }
    return <div>data is not fetched</div>;
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
