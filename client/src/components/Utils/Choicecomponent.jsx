import React from "react";
import propTypes from "prop-types";

const Choicecomponent = ({ source, name }) => (
  <>
    <input type="image" alt="image" id={name} src={source} width="100px" />
  </>
);

export default Choicecomponent;

Choicecomponent.propTypes = {
  source: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
