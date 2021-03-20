import React from "react";
import propTypes from "prop-types";

const Button = ({ content, fun }) => (
  <>
    <button className="button-1" onClick={fun}>
      {content}
    </button>
  </>
);

export default Button;

Button.propTypes = {
  content: propTypes.string.isRequired,
  fun: propTypes.func,
};
