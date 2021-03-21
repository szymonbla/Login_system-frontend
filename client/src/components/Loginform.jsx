import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "./Auth";
import Button from "./Utils/Button";

const Loginform = () => {
  const [mail, setMail] = useState("");
  const [passwordReq, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const loggedin = {
      email: mail,
      password: passwordReq,
    };

    await axios.post("http://localhost:5000/app/login", loggedin).then((response) => {
      if (!response.data.auth) {
        console.log(response.data);
        auth.logout();
        console.log(auth.isAuthenticated());
      } else {
        console.log(response.data);
        auth.loginfun();
        localStorage.setItem("token", response.data.token);
        auth.loginfun();
        console.log(auth.isAuthenticated());
      }
    });
  };

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
            <Button content="Login" fun={login} />
          </Link>
        </form>
      </div>

      {auth.isAuthenticated() ? (
        <Link to="/home">
          <button>Jaen</button>
        </Link>
      ) : (
        <h1>Nie jestes tak dobry</h1>
      )}
    </div>
  );
};

export default Loginform;
