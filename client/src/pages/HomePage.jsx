import React, { useEffect } from "react";
import { withRouter } from "react-router";
import Headline from "../components/Headline";
import EnterButton from "../components/EnterButton";
import images from "../images/images";
import Createbattle from "../pages/Createbattle";
import Joinbattle from "../pages/Joinbattle";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <div className="homepage-background-container">
            <div className="homepage-container">
              <div className="row">
                <Headline />
              </div>
              <div className="homepage-battle">
                <Link to="/create" style={{ textDecoration: "none", color: "inherit" }}>
                  <EnterButton imageBattle={images[0].icon} content="Create a Battle" />
                </Link>
                <Link to="/join" style={{ textDecoration: "none", color: "inherit" }}>
                  <EnterButton imageBattle={images[1].icon} content="Join Battle" />
                </Link>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/create">
          <Createbattle />
        </Route>
        <Route path="/join">
          <Joinbattle />
        </Route>
      </Switch>
    </Router>
  );
};

export default withRouter(HomePage);
