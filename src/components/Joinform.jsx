import React, { useState } from "react";

const Joinform = () => {
  const [code, setCode] = useState("");

  return (
    <div className="joinform-container">
      <div className="joinform-content">
        <form>
          <label htmlFor="join">
            Join Battle
            <input
              id="join"
              type="text"
              value={code}
              placeholder="Code"
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </label>
          <button type="submit" value="Join">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Joinform;
