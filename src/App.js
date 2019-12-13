import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from "components/ui/welcome/Welcome";

function App() {
  return (
    <Router>
      <Welcome />
    </Router>
  );
}

export default App;
