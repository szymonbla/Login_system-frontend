import axios from "axios";
import { withRouter } from "react-router";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "./Auth";
import Button from "./Utils/Button";

const Loginform = (props) => {
  const [mail, setMail] = useState("");
  const [passwordReq, setPassword] = useState("");

  const hanfleSubmit = (e) => {
    e.preventDefault();
    const loggedin = {
      email: mail,
      password: passwordReq,
    };

    auth.login(loggedin);
  };

  return (
    <div className="loginform-container">
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
          <button onClick={hanfleSubmit}>Zaloguj sie</button>
          {/* <Button
            content="Login"
            fun={auth.login({ mail, passwordReq }, () => {
              props.history.push("/home");
            })}
          /> */}
        </form>
      </div>

      {auth.isAuthenticated() ? <button>Jaen</button> : <h1>Przyjedzie pora na glodomora</h1>}
    </div>
  );
};

export default withRouter(Loginform);
