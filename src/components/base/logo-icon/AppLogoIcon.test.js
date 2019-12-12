import React from "react";
import { shallow } from "enzyme";

import AppLogoIcon from "./AppLogoIcon";

it("Logo should be a svg element", () => {
  const wrapper = shallow(<AppLogoIcon />);
  expect(wrapper.find("svg")).toBeTruthy();
});
