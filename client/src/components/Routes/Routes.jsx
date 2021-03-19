import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Createbattle = React.lazy(() => import("../../pages/Createbattle"));
const Joinbattle = React.lazy(() => import("../../pages/Joinbattle"));
const Homepage = React.lazy(() => import("../../pages/HomePage"));
const Landing = React.lazy(() => import("../../pages/Landing"));
const Register = React.lazy(() => import("../../pages/Register"));

const Routes = () => (
  <Suspense fallback={<h1>Loading screen ...</h1>}>
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Landing />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/create">
        <Createbattle />
      </Route>
      <Route path="/join">
        <Joinbattle />
      </Route>
    </Switch>
  </Suspense>
);

export default Routes;
