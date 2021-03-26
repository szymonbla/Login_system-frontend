import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Utils/Button";
import logo from "../images/pages/logo.svg";

const Layoutroot = () => (
  <div className="layout-container">
    <div className="layout-content">
      <div className="column left">
        <img src={logo} className="logo" />
        <h1 className="logo-title">Log in or register</h1>
      </div>
      <div className="column right">
        <div className="row">
          <Link to="/login">
            <Button content="Sign in" />
          </Link>
        </div>
        <div className="row">
          <Link to="/register">
            <Button content="Sign up" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Layoutroot;
