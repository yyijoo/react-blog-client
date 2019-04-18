import React, { Component } from "react";
import Header from "components/shared/Header";
import Error from "components/shared/Error";
import { HashRouter, Route, Switch } from "react-router-dom";
import Til from "pages/til/Til";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Til} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
