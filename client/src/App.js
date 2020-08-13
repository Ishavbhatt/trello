import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "../src/components/Signup";
import Signin from "../src/components/Signin";
import Header from "../src/components/Header";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
