import React, { useState } from "react";
import Headline from "../components/Headline";
import axios from "axios";

const Register = () => {
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
    <div className="register-container">
      <div className="register-header">
        <Headline />
      </div>
      <div className="register-content">
        <form onSubmit={register}>
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
            placeholder=""
            value={passwordReq}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={register}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
