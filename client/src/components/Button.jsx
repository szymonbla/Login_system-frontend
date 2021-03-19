import React from "react";
import propTypes from "prop-types";

const Button = ({ content }) => (
  <>
    <button className="button-1"> {content} </button>
  </>
);

export default Button;

Button.propTypes = {
  content: propTypes.string.isRequired,
};
