import React, { Component, Fragment } from "react";
import Header from "components/shared/Header";
import Error from "components/shared/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "pages/about";
import Til from "pages/til";
import Resume from "pages/resume";
import Portfolio from "pages/portfolio";
import styled from "styled-components";

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
              <Route exact path="/about" component={About} />
              <Route exact path="/til" component={Til} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/portfolio/" component={Portfolio} />
              <Route component={Error} />
            </Switch>
          </ContentsBelowHeaderContainer>
        </Router>
      </Fragment>
    );
  }
}

export default App;
