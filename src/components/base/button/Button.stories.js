import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

const buttonContent = "Button text";
const optionsButton = {
  Primary: "primary",
  Danger: "danger"
};

storiesOf("Base | Button", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Button
      color={select("Color", optionsButton, "primary")}
      OnClicked={action("Clicked button")}
    >
      {text("Content", buttonContent)}
    </Button>
  ));
