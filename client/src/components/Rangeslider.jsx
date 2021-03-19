import React, { useState } from "react";

const Rangeslider = () => {
  const [value, setValue] = useState(5);

  return (
    <div className="rangeslider-container">
      <div className="rangeslider-current-value">Ilość rund: {value}</div>
      <div className="rangeslider-field">
        <div className="rangeslider-value left">0</div>
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          steps="1"
        />
        <div className="rangeslider-value right">10</div>
      </div>
    </div>
  );
};

export default Rangeslider;
