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
        <div className="register-desription">
          <h1>Pick a password</h1>
          <p>Don't reuse your bank password, we didn't spend a lot on security for this app.</p>
        </div>
        <Registerform />
      </div>
    </div>
  );
};

export default Register;
