import React from "react";
import {io} from "socket.io-client";
const App = () => {
  const socket = io("http://localhost:3000"); // with this socket is connected;

  return <div>App</div>
}
export default App;