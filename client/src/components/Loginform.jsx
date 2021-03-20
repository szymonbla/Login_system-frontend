import axios from "axios";
import React, { useState } from "react";
import Button from "./Utils/Button";

const Loginform = () => {
  const [mail, setMail] = useState("");
  const [passwordReq, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    const loggedin = {
      email: mail,
      password: passwordReq,
    };

    axios.post("http://localhost:5000/app/login", loggedin).then((response) => {
      console.log(response.data);
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
