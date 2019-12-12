import React from "react";
import { shallow } from "enzyme";

import AppLogo from "./AppLogo";

it("Logo should be a svg element", () => {
  const wrapper = shallow(<AppLogo />);
  expect(wrapper.find("svg")).toBeTruthy();
});
