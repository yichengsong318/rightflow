import React from "react";
import { storiesOf } from "@storybook/react";
import Splashscreen from "./Splashscreen";

const delayTime = 600;

storiesOf("Base|Splashscreen", module)
  .addDecorator(storyFn => <div className="h-screen">{storyFn()}</div>)
  .add("default", () => <Splashscreen delay={delayTime} />)
  .add("delaying", () => <Splashscreen static="delaying" />)
  .add("fulled", () => <Splashscreen static="fulled" />);
