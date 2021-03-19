import React from "react";
import Loginform from "../components/Loginform";
import Headline from "../components/Headline";

const Login = () => {
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

export default Login;
