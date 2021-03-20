import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "./Utils/Button";

const Registerform = () => {
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [passwordReq, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    const registered = {
      username: userName,
      email: mail,
      password: passwordReq,
    };

    axios.post("http://localhost:5000/app/register", registered).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="registerform-container">
      <div className="registerform-body">
        <form className="register-form">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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
          <Button content="Register" fun={register} />
        </form>
      </div>
    </div>
  );
};

export default Registerform;
