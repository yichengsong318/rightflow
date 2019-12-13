import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import AppLogoIcon from "./AppLogoIcon";

storiesOf("Base | IconLogo", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <AppLogoIcon
      width={text("Width", "10rem")}
      height={text("Height", "4rem")}
    />
  ));
