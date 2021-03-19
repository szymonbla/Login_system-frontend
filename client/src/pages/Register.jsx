import React from "react";
import Registerform from "../components/Registerform";
import Headline from "../components/Headline";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-header">
        <Headline />
      </div>
      <div className="register-content">
        <Registerform />
      </div>
    </div>
  );
};

export default Register;
