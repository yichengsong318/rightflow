import { createStore } from "redux";
import reducer from "./reducer";

// Create store for our app base on redux
export function makeStore() {
  return createStore(reducer, {
    appName: "RightFlow",
    timeTransitionSplashscreen: 600,
    timeDurationSplashscreen: 1000,
    userIsConnected: false,
    viewOnbording: false,
    userFullName: "",
    currentLang: "en",
    languages: [
      { key: "en", name: "English" },
      { key: "fr", name: "Français" }
    ],
    siteCopyright: "A product of"
  });
}
