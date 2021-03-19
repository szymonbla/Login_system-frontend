import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "../pages/Register";

const Landing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Hello </h1>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default Landing;
