import React from "react";
import Slide from "../components/Utils/Slide";
import Inputcomponent from "../components/Utils/Inputcomponent";
import Rangeslider from "../components/Utils/Rangeslider";

const Createsetting = () => (
  <div className="setting-container">
    <div className="setting-nickname">
      <Inputcomponent />
    </div>
    <div className="setting-limit">
      <Rangeslider />
    </div>
    <div className="setting-breed">
      <Slide />
    </div>
  </div>
);

export default Createsetting;
