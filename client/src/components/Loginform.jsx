import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Utils/Button";

const Loginform = () => {
  const [mail, setMail] = useState("");
  const [passwordReq, setPassword] = useState("");

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
          <Link to="/home">
            <Button content="Login" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
