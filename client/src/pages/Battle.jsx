import React, { useState, useEffect } from "react";
import queryString from "query-string"; // It helps to retrive data from the URL
import * as io from "socket.io-client";
import axios from "axios";

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

  useEffect(async () => {
    const { tag } = queryString.parse(location.search);
    socket = io(ENDPOINT_TO_BACKEND);

    await reqApi();
    setName(tag);
    console.log(tag);
    console.log(socket);
    return () => {
      socket.on("disconnect");
      socket.off();
    };
  }, [ENDPOINT_TO_BACKEND]);

  useEffect(() => {
    socket.emit("data", { name, user });
  }, [user]);

  return (
    <h1>
      Battle page {name}, {user}
    </h1>
  );
};

export default Battle;
