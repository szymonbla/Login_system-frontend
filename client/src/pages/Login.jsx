import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loginform from "../components/Loginform";
import Headline from "../components/Headline";
import axios from "axios";
import auth from "../components/Auth";
import { withRouter } from "react-router";
import Button from "../components/Utils/Button";

const Login = (props) => {
  useEffect(async () => {
    await axios
      .get("http://localhost:5000/app/isAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (localStorage.getItem("token")) {
          auth.isloggedin();
          console.log(auth.isAuthenticated());
          props.history.push("/home");
        } else {
          localStorage.clear();
          console.log(auth.isAuthenticated());
        }
      });
  });

  return (
    <div className="login-container">
      <div className="login-header">
        <Headline content="Login to create battle" link="/" />
      </div>
      <div className="login-content">
        <Loginform />
        <div className="login-to-home">
          <Link to="/">
            <Button content="Back" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
