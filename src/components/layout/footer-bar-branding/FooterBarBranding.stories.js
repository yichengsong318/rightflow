import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import FooterBarBranding from "./FooterBarBranding";

const defaultDescription = "A product of";

storiesOf("Layout | FooterBarBranding", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return (
      <FooterBarBranding
        description={text("Description", defaultDescription)}
      />
    );
  });
