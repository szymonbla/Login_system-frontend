import React, { useState, useEffect } from "react";
import queryString from "query-string"; // It helps to retrive data from the URL
import io from "socket.io-client";

let socket;

const Battle = ({ location }) => {
  const [name, setName] = useState("");
  const ENDPOINT_TO_BACKEND = "http://localhost:5000/";

  useEffect(() => {
    const data = queryString.parse(location.search);
    socket = io(ENDPOINT_TO_BACKEND);

    setName(location.search);
    console.log(data);
    console.log(socket);
  });

  return <h1>Battle page</h1>;
};

export default Battle;
