import React from "react";
import PropTypes from "prop-types";

const EnterButton = ({ imageBattle, content }) => (
  <div className="enter-tail">
    <div className="enter-header">
      <div className="enter-header-title">{content}</div>
    </div>
    <div className="enter-image">
      <img src={imageBattle} className="enter-image-icons" />
    </div>
  </div>
);

export default EnterButton;

EnterButton.PropTypes = {
  imageBattle: PropTypes.array.isRequired,
  content: PropTypes.string.isRequired,
};
