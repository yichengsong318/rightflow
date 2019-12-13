import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import FooterBarMenu from "./FooterBarMenu";

const defaultDescription = "A product of";

storiesOf("Layout | FooterBarMenu", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return (
      <FooterBarMenu description={text("Description", defaultDescription)} />
    );
  });
