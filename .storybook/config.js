import { configure, addParameters } from "@storybook/react";
import { theme } from "./rf-theme"

// Option defaults.
addParameters({
  options: {
    theme: theme
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
