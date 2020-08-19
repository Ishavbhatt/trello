import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "../src/components/Signup";
import Signin from "../src/components/Signin";
import Header from "../src/components/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/">
              <Header />
              <h1>Home page</h1>
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Header />
              <Signin />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
