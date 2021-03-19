import React from "react";
import Headline from "../components/Headline";
import Layoutroot from "../components/Layoutroot";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-header">
        <Headline />
      </div>
      <div className="landing-body">
        <div className="landing-body-container">
          <Layoutroot />
        </div>
      </div>
    </div>
  );
};

export default Landing;
