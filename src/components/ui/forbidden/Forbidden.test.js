import React from "react";
import { shallow } from "enzyme";

import Forbidden from "./Forbidden";

const content = "Forbidden";

it("Should render Forbidden content", () => {
  const wrapper = shallow(<Forbidden />);
  expect(wrapper.find(content)).toBeTruthy();
});
