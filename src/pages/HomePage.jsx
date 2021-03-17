import React from "react";
import Headline from "../components/Headline";
import EnterButton from "../components/EnterButton";
import createbattle from "../images/createbattle.png";

const HomePage = () => {
  return (
    <div className="homepage-background-container">
      <div className="homepage-container">
        <div className="row">
          <Headline />
        </div>
        <div className="row">
          <EnterButton />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
