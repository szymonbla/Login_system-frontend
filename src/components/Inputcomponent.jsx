import react from "react";
import PropTypes from "prop-types";

const Inputcomponent = ({ name }) => (
  <div className="input-component">
    <div className="input-container-form">
      <form>
        <Label>{name}</Label>
        <input type="text" id="name" />
      </form>
    </div>
  </div>
);

export default Inputcomponent;

Inputcomponent.propTypes = {
  name: PropTypes.string.isRequired,
};
