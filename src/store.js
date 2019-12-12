import { createStore } from "redux";
import reducer from "./reducer";

// Create store for our app base on redux
export function makeStore() {
  return createStore(reducer, {
    appName: "RightFlow",
    timeDelaySplashscreen: 600,
    userConnected: false
  });
}
