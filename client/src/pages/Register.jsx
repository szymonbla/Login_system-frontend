import React, { useState } from "react";
import Headline from "../components/Headline";
import Axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [passwordReq, setPassword] = useState("");

  const register = () => {
    Axios.post("http://localhost:5000/register", {
      username: userName,
      email: mail,
      password: passwordReq,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <Headline />
      </div>
      <div className="register-content">
        <form>
          <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
          <input type="email" placeholder="Email" onChange={(e) => setMail(e.target.value)} />
          <input type="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={register}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
