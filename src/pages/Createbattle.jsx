import react from "react";
import Headline from "../components/Headline";

const Createbattle = () => {
  return (
    <div className="create-container">
      <div className="create-header">
        <Headline />
      </div>
      <div className="create-content">
        <div className="column">Settings</div>
        <div className="column">Refs</div>
      </div>
    </div>
  );
};

export default Createbattle;
