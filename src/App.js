import React, { Component } from "react";
import Header from "components/shared/Header";
import Error from "components/shared/Error";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "pages/about/About";
import Til from "pages/til/Til";
import Resume from "pages/resume/Resume";
import Portfolio from "pages/portfolio/Portfolio";
import ProjectDetail from "pages/portfolio/ProjectDetail";

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Header />
          <div style={{ marginTop: "62px" }}>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/til" component={Til} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/portfolio/" component={Portfolio} />
              <Route
                exact
                path="/portfolio/:project"
                component={ProjectDetail}
              />
              <Route component={Error} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
