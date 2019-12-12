import React from "react";
import { StoreContext } from "redux-react-hook";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { theme } from "./rf-theme"; // custom storybook theme

// import css styles
import "../src/vendors.css";
import "../src/styles.css";
import "./stories.css"; // stories global css

// add redux for state management
import { makeStore } from "../src/store";
const store = makeStore();


// Add global parameters
addParameters({
  options: {
    theme: theme
  },
});


// Add global decorators. The order matter
addDecorator(storyFn => (
  <StoreContext.Provider value={store}>{storyFn()}</StoreContext.Provider>
));
addDecorator(withKnobs); // For Knobs addons to storybook (use to live edit component data)
addDecorator(storyFn => <div className="story-container"> {storyFn()}</div>); // Add wrapper container for stories

// Create loader
const loaderFn = () => {
  const req = require.context("../src/components", true, /\.stories\.js$/);
  req.keys().forEach(fname => req(fname));
};

// run configuration
configure(loaderFn, module);