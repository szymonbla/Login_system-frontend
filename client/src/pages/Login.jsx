import React, { useEffect } from "react";
import Loginform from "../components/Loginform";
import Headline from "../components/Headline";
import axios from "axios";
import auth from "../components/Auth";
import { withRouter } from "react-router";

const Login = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/app/isAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        localStorage.clear();
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
