import { createStore } from "redux";
import reducer from "./reducer";

// Create store for our app base on redux
export function makeStore() {
  return createStore(reducer, {
    socketIoInstance: null,
    appName: "RightFlow",
    timeTransitionSplashscreen: 600,
    timeDurationSplashscreen: 1000,
    userIsConnected: false,
    userInfo: null,
    viewOnbording: false,
    userFullName: "Harold Meks-Ajagu",
    currentLang: "en",
    languages: [
      { key: "en", name: "English" },
      { key: "fr", name: "Français" }
    ],
    siteCopyright: "A product of"
  });
}
