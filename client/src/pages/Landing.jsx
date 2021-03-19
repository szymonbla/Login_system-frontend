import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headline from "../components/Headline";
import Register from "../pages/Register";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-header">
        <Headline />
      </div>
      <div className="landing-body"></div>
    </div>
  );
};

export default Landing;
