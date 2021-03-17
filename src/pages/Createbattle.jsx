import react from "react";
import Headline from "../components/Headline";

const Createbattle = () => {
  return (
    <div className="create-container">
      <div className="create-header">
        <Headline />
      </div>
      <div className="create-content">
        <div className="column">
          <div className="column-header">
            <h1 className="column-header-title">Setting</h1>
          </div>
          <div className="column-wrapper"></div>
        </div>
        <div className="column">
          <div className="column-header">
            <h1 className="column-header-title">Invite friend</h1>
          </div>
          <div className="column-invite">
            <div className="column-invite-code">Code: 478589</div>
            <div className="column-invite-refs">refy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createbattle;
