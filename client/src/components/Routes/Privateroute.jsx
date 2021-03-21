import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../Auth";

const Privateroute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default Privateroute;
