import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Headline = ({ content }) => (
  <div className="headline-container">
    <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
      <span className="headline-header">Rock, Paper, Scissors</span>
    </Link>
    <div className="headline-description">
      <span className="headline-description-title">
        Welcome to <span className="headline-user">{content}</span>{" "}
      </span>
      <div className="headline-description-content">
        Web application which facilities you to settle all disputes
      </div>
    </div>
  </div>
);

export default Headline;

Headline.propTypes = {
  content: propTypes.string,
};
