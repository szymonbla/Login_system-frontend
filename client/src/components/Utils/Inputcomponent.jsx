import React, { useState } from "react";
import PropTypes from "prop-types";

const Inputcomponent = () => {
  const [name, setName] = useState("");

  return (
    <div className="input-component">
      <div className="input-component-title">{name}</div>
      <div className="input-container-form">
        <form className="input-form">
          <label></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength="6"
            required
          />
          <span className="placeholder">Enter battle title</span>
        </form>
      </div>
    </div>
  );
};

export default Inputcomponent;

Inputcomponent.propTypes = {
  name: PropTypes.string,
};
