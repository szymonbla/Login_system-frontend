import React from "react";
import { Link } from "react-router-dom";
import Registerform from "../components/Registerform";
import Headline from "../components/Headline";
import Button from "../components/Utils/Button";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-header">
        <Headline content="Register to create an account" />
      </div>
      <div className="register-content">
        <div className="register-desription">
          <h1>Pick a password</h1>
          <p>Don't reuse your bank password, we didn't spend a lot on security for this app.</p>
        </div>
        <Registerform />
        <div className="register-to-login">
          <Link to="/login">
            <Button content="Log in" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
