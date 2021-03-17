import react from "react";
import Headline from "../components/Headline";
import Joinform from "../components/Joinform";

const Joinbattle = () => {
  return (
    <div className="join-container">
      <Headline />
      <div className="join-wrapper">
        <Joinform />
      </div>
    </div>
  );
};

export default Joinbattle;
