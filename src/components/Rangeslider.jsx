import React from "react";

const Rangeslider = () => {
  return (
    <div className="rangeslider-container">
      <div className="rangeslider-left-value">0</div>
      <input type="range" min="0" max="1" />
      <div className="rangeslider-right-value">10</div>
    </div>
  );
};

export default Rangeslider;
