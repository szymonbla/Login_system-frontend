import axios from "axios";
import { withRouter } from "react-router";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "./Auth";
import Button from "./Utils/Button";

const Loginform = (props) => {
  const [mail, setMail] = useState("");
  const [passwordReq, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const loggedin = {
      email: mail,
      password: passwordReq,
    };

    await auth.login(loggedin);
    if (auth.isAuthenticated() === true) {
      props.history.push("/home");
    }
  };

  return (
    <div className="loginform-container">
      {auth.isAuthenticated() ? <button>Jaen</button> : <h1>Przyjedzie pora na glodomora</h1>}
      <div className="loginform-body">
        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={passwordReq}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button content="Login" fun={handleLogin} />
        </form>
      </div>
    </div>
  );
};

export default withRouter(Loginform);
