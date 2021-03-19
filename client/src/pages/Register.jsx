import React, { useState } from "react";
import Headline from "../components/Headline";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [passwrod, setPassword] = useState("");

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
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
