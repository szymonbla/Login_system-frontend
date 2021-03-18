import React from "react";

const Rangeslider = () => {
  return (
    <div className="rangeslider-container">
      <div className="rangeslider-field">
        <div className="rangeslider-value left">0</div>
        <input type="range" min="0" max="10" steps="1" />
        <div className="rangeslider-value right">10</div>
      </div>
    </div>
  );
};

export default Rangeslider;
