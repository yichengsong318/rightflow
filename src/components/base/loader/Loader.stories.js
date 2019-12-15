import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Loader from "./Loader";

storiesOf("Base | Loader", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    // <Loader width={text("Width", "10rem")} height={text("Height", "4rem")} />
    <Loader />
  ));
