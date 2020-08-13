import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import Signin from "./Signin";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/users">
          <Header />
          <h1>Home page</h1>
        </Route>

        <Route exact path="/users/signup">
          <Signup />
        </Route>
        <Route exact path="/users/signin">
          <Header />
          <Signin />
        </Route>
      </Switch>
    );
  }
}

export default App;
