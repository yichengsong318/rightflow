import React from "react";
import { shallow } from "enzyme";

import Loader from "./Loader";

it("Loader should be a svg element", () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper.find("svg")).toBeTruthy();
});
