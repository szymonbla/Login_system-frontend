import axios from "axios";
import React, { useState, useEffect } from "react";
import auth from "./Auth";
import Button from "./Utils/Button";

const Loginform = () => {
  const [mail, setMail] = useState("");
  const [passwordReq, setPassword] = useState("");

  const login = async (e, props) => {
    e.preventDefault();

    const loggedin = {
      email: mail,
      password: passwordReq,
    };

    await axios.post("http://localhost:5000/app/login", loggedin).then((response) => {
      console.log(response.data);
    });

    auth.login(() => {
      props.history.push("/home");
    });
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

          <Button content="Login" fun={login} />
        </form>
      </div>
    </div>
  );
};

export default Loginform;
