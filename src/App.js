import React, { Component, Fragment } from "react";
import Header from "components/shared/Header";
import Error from "components/shared/Error";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "pages/about";
import Til from "pages/til";
import Resume from "pages/resume";
import Portfolio from "pages/portfolio";
import Blog from "pages/Blog";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "redux/store.js";

const ContentsBelowHeaderContainer = styled.div`
  margin-top: 62px;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <ContentsBelowHeaderContainer>
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/about" component={About} />
              <Route path="/til" component={Til} />
              <Route path="/resume" component={Resume} />
              <Route path="/portfolio/" component={Portfolio} />
              <Route path="/blog/" component={Blog} />
              <Route component={Error} />
            </Switch>
          </ContentsBelowHeaderContainer>
        </Router>
      </Fragment>
    );
  }
}

export default App;
