import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import AppLogo from "./AppLogo";

storiesOf("Base | Logo", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <AppLogo width={text("Width", "10rem")} height={text("Height", "4rem")} />
  ));
