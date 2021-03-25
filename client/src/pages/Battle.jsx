import React, { useState, useEffect } from "react";
import queryString from "query-string"; // It helps to retrive data from the URL
import io from "socket.io-client";

let socket;

const Battle = ({ location }) => {
  const [name, setName] = useState("");
  const ENDPOINT_TO_BACKEND = "http://localhost:5000/";

  useEffect(() => {
    const { tag } = queryString.parse(location.search);
    socket = io(ENDPOINT_TO_BACKEND);

    setName(tag);
    console.log(tag);
    console.log(socket);

    return () => {
      socket.on("disconnect");
      socket.off();
    };
  }, [ENDPOINT_TO_BACKEND]);

  return <h1>Battle page</h1>;
};

export default Battle;
