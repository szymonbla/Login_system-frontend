import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headline from "../components/Headline";
import Createsetting from "../components/Createsetting";
import Button from "../components/Utils/Button";
import Inputcomponent from "../components/Utils/Inputcomponent";

const Createbattle = () => {
  const [tag, setTag] = useState("");

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
          <div className="column-wrapper">
            <div className="setting-container">
              <div className="setting-nickname">
                <div className="input-component-title">{tag}</div>
                <div className="input-container-form">
                  <form className="input-form">
                    <label></label>
                    <input
                      type="text"
                      id="name"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      maxLength="6"
                      required
                    />
                    <span className="placeholder">Enter battle title</span>
                  </form>
                </div>
              </div>
              <div className="setting-limit">{/* <Rangeslider /> */}</div>
              <div className="setting-breed">{/* <Slide /> */}</div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="column-header">
            <h1 className="column-header-title">Invite friend</h1>
          </div>
          <div className="column-invite">
            <div className="column-invite-code">Code: 478589</div>
            <div className="column-invite-refs"></div>
          </div>
        </div>
      </div>
      <div className="create-button">
        <Link onClick={(event) => (!tag ? event.preventDefault() : null)} to={`/battle?tag=${tag}`}>
          <Button content="Create a battle" />
        </Link>
      </div>
    </div>
  );
};

export default Createbattle;
