import React, { useState } from "react";
import axios from "axios";

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
        <form>
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

export default Registerform;
