import React, { useEffect, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "components/layout/main/Main";
import io from "socket.io-client";
import { SOCKET } from "constants/constants";
import { useDispatch } from "redux-react-hook";

function App() {
  const socket = io(SOCKET.BASE_URL);
  const dispatch = useDispatch();
  const updateSocketInstance = useCallback(
    socket => dispatch({ type: "UPDATE_SOCKET_INSTANCE", value: socket }),
    [dispatch]
  );
  useEffect(() => {
    updateSocketInstance(socket);
    return () => {
      socket.removeEventListener();
      socket.close();
    };
  }, [updateSocketInstance, socket]);
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
