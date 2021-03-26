import React, { useState, useEffect } from "react";
import queryString from "query-string"; // It helps to retrive data from the URL
import * as io from "socket.io-client";
import axios from "axios";
import Button from "../components/Utils/Button";
import Choicecomponent from "../components/Utils/Choicecomponent";
import createbattle from "../images/pages/createbattle.svg";

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

  useEffect(() => {
    const { tag } = queryString.parse(location.search);
    socket = io(ENDPOINT_TO_BACKEND);

    reqApi();
    setName(tag);
    return () => {
      socket.on("disconnect");
      socket.off();
    };
  }, [ENDPOINT_TO_BACKEND]);

  useEffect(() => {
    socket.emit("props_room", { name });
    socket.emit("user_data", { user });
  }, [user, name]);

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
        <div className="battle-column">
          <div className="battle-user">{user}</div>
          <div className="battle-choice">
            <Choicecomponent source={createbattle} name="rock" />
            <Choicecomponent source={createbattle} name="papier" />
            <Choicecomponent source={createbattle} name="scissors" />
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
