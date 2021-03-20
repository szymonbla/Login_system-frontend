import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Privateroute from "../Routes/Privateroute";

const Createbattle = React.lazy(() => import("../../pages/Createbattle"));
const Joinbattle = React.lazy(() => import("../../pages/Joinbattle"));
const Homepage = React.lazy(() => import("../../pages/HomePage"));
const Landing = React.lazy(() => import("../../pages/Landing"));
const Register = React.lazy(() => import("../../pages/Register"));
const Login = React.lazy(() => import("../../pages/Login"));

const Routes = () => (
  <Suspense fallback={<h1>Loading screen ...</h1>}>
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>

    <Privateroute component={<Createbattle />} path="/create" />
    <Privateroute component={<Homepage />} path="/home" />
    <Privateroute component={<Joinbattle />} path="/join" />
  </Suspense>
);

export default Routes;
