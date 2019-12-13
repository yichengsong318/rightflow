import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import Language from "./Language";

const languages = [
  { key: "en", name: "English" },
  { key: "fr", name: "Français" }
];

storiesOf("Base | Language", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <Language currentLang="en" languages={languages} />;
  });
