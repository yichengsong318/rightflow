import React from "react";
import { shallow } from "enzyme";

import InternalError from "./InternalError";

const content = "Internal error";

it("Should render InternalError content", () => {
  const wrapper = shallow(<InternalError />);
  expect(wrapper.find(content)).toBeTruthy();
});
