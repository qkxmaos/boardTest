import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import fetcher from "./utils/fetcher";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.text())
      .then((message) => setMessage(message));
  }, []);

  // const { data: messageData } = useSWR(
  //   "http://localhost:8080/api/hello",
  //   fetcher,
  //   {
  //     dedupingInterval: 10000,
  //   }
  // );

  // useEffect(() => {
  //   axios
  //     .get("/api/hello", { withCredentials: true })
  //     .then((res) => res.data)
  //     .then((message) => setMessage(message));
  // }, [message, setMessage]);

  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
