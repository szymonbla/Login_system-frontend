import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Headline from "../components/Headline";
import EnterButton from "../components/EnterButton";
import images from "../images/images";
import Createbattle from "../pages/Createbattle";
import Joinbattle from "../pages/Joinbattle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import auth from "../components/Auth";

const HomePage = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/app/isAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        auth.isloggedin();
        console.log(auth.isAuthenticated());
      });
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <div className="homepage-background-container">
            <div className="homepage-container">
              <div className="row">
                <Headline />
                {name};
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
