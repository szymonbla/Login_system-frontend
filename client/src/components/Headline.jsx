import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Headline = ({ title, content, link = "/home" }) => (
  <div className="headline-container">
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
      <span className="headline-header">Rock, Paper, Scissors</span>
    </Link>
    <div className="headline-description">
      <span className="headline-description-title">
        Welcome to <span className="headline-user">{title}</span>
      </span>
      <div className="headline-description-content">{content}</div>
    </div>
  </div>
);

export default Headline;

Headline.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  link: propTypes.string,
};
