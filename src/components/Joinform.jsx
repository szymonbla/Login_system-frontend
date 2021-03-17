import React, { useState } from "react";

const Joinform = () => {
  const [code, setCode] = useState("");

  return (
    <div className="joinform-container">
      <div className="joinform-header">
        <h1 className="joinform-title">Join Room</h1>
      </div>
      <div className="joinform-content">
        <form>
          <label htmlFor="join">
            <input
              id="join"
              type="text"
              value={code}
              placeholder="Code"
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </label>
        </form>
        <button type="submit" value="Join">
          Join
        </button>
      </div>
    </div>
  );
};

export default Joinform;
