import React from "react";
import Headline from "../components/Headline";

const HomePage = () => {
  return (
    <div className="homepage-background-container">
      <div className="homepage-container">
        <div className="row">
          <Headline />
        </div>
        <div className="row">
          <Headline />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
