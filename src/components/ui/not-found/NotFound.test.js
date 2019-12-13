import React from "react";
import { shallow } from "enzyme";

import NotFound from "./NotFound";

const content = "Not found";

it("Should render NotFound", () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper.find(content)).toBeTruthy();
});
