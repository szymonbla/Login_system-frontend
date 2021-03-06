import React, { useState, useEffect } from "react";
import queryString from "query-string"; // It helps to retrive data from the URL
import * as io from "socket.io-client";
import axios from "axios";
import Button from "../components/Utils/Button";
import Choicecomponent from "../components/Utils/Choicecomponent";
import rockIcon from "../images/pages/hand.svg";
import papierIcon from "../images/pages/hello.svg";
import scissorsIcon from "../images/pages/finger.svg";

let socket;

const Battle = ({ location }) => {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  const ENDPOINT_TO_BACKEND = "http://localhost:5000/";

  const reqApi = async () => {
    await axios
      .get("http://localhost:5000/app/battle", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(JSON.stringify(response.data.user));
      });
  };

  return (
    <div className="battle-container">
      <div className="battle-header">
        <div className="battle-title">
          <h1 className="battle-title-content">{name}</h1>
          <div className="battle-disconnect">
            <Button content="Left battle" />
          </div>
        </div>
      </div>
      <div className="battle-main">
        <div className="battle-column"></div>
        <div className="battle-column">
          <div className="battle-user">{user}</div>
          <div className="battle-choice">
            <Choicecomponent source={rockIcon} name="rock" />
            <Choicecomponent source={papierIcon} name="papier" />
            <Choicecomponent source={scissorsIcon} name="scissors" />
          </div>
          <div className="battle-submit">
            <button type="submit">Zapisz swoje odpowiedzi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battle;
