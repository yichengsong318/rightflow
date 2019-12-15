import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { StoreContext } from "redux-react-hook";
import "./i18n";
import "./vendors.css";
import "./styles.css";

import App from "./App";
import { makeStore } from "./store";

const store = makeStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
