import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import FooterBar from "./FooterBar";

storiesOf("Layout | FooterBar", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <FooterBar />;
  });
