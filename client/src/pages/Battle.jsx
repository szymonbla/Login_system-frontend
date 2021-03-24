import React, { useState, useEffect } from "react";
import queryString from "query-string"; // It helps to retrive data from the URL
import { io } from "socket.io-client";

const ENDPOINT_TO_BACKEND = "http://localhost:5000/app/battle";
const socket = io("localhost:5000/app/battle");

const Battle = () => {
  useEffect(() => {
    console.log(socket);
  }, []);
  return <h1>Battle page</h1>;
};

export default Battle;
