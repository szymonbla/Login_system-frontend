import React, { useState } from "react";
import PropTypes from "prop-types";

const Inputcomponent = () => {
  const [name, setName] = useState("");

  return (
    <div className="input-component">
      <div className="input-container-form">
        <form>
          <label htmlFor="name">Nickname</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Nickname"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Inputcomponent;

Inputcomponent.propTypes = {
  name: PropTypes.string,
};
