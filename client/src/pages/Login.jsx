import React, { useEffect } from "react";
import Loginform from "../components/Loginform";
import Headline from "../components/Headline";
import axios from "axios";
import auth from "../components/Auth";
import { withRouter } from "react-router";

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
        <Headline />
      </div>
      <div className="login-content">
        <Loginform />
      </div>
    </div>
  );
};

export default withRouter(Login);
