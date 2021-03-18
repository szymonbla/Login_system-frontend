import React from "react";
import Slide from "../components/Slide";
import Inputcomponent from "../components/Inputcomponent";

const Createsetting = () => (
  <div className="setting-container">
    <div className="setting-nickname">
      <Inputcomponent />
    </div>
    <div className="setting-limit">
      <Slide />
    </div>
    <div className="setting-breed">
      <Slide />
    </div>
  </div>
);

export default Createsetting;
