import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { theme } from "./rf-theme";
import '../src/vendors.css';
import '../src/styles.css';
import './stories.css';

// Add global parameters
addParameters({
  options: {
    theme: theme
  },
});

// Add global decorators
addDecorator(storyFn => <div className="story-container"> {storyFn()}</div>)

const loaderFn = () => {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(fname => req(fname));
};

configure(loaderFn, module);