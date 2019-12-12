import React from "react";
import { shallow } from "enzyme";

import Splashscreen from "./Splashscreen";

it("Logo should be a svg element", () => {
  const wrapper = shallow(<Splashscreen />);
  expect(wrapper.find(".w-full h-full")).toBeTruthy();
});
