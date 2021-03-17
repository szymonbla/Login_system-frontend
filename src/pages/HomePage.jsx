import React from "react";
import Headline from "../components/Headline";
import EnterButton from "../components/EnterButton";
import images from "../images/images";

const HomePage = () => {
  return (
    <div className="homepage-background-container">
      <div className="homepage-container">
        <div className="row">
          <Headline />
        </div>
        <div className="homepage-battle">
          <EnterButton imageBattle={images[0].icon} content="Create a Battle" />
          <EnterButton imageBattle={images[1].icon} content="Join Battle" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
