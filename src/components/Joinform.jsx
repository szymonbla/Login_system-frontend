import React from "react";

const Joinform = () => (
  <div className="joinform-container">
    <div className="joinform-title">Join Battle</div>
    <div className="joinform-content">
      <form>
        <label htmlFor="join">
          Join
          <input type="text" name="join" />
        </label>
        <button type="submit" value="Join" />
      </form>
    </div>
  </div>
);

export default Joinform;
