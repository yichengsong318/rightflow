import React from "react";
import { shallow } from "enzyme";

import Onboarding from "./Onboarding";

const content = "Onboarding";

it("Should render onboarding screen", () => {
  const wrapper = shallow(<Onboarding />);
  expect(wrapper.find(content)).toBeTruthy();
});
