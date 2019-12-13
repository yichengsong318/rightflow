import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import TopNavBarMenu from "./TopNavBarMenu";

const defaultUsername = "Harold Meks-Ajagu";

storiesOf("Layout | TopNavBarMenu", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <TopNavBarMenu userName={text("Username", defaultUsername)} />;
  });
