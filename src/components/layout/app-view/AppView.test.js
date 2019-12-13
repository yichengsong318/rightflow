import React from "react";
import { shallow } from "enzyme";

import AppView from "./AppView";

const content = "App";

it("Should render app layout", () => {
  const wrapper = shallow(<AppView />);
  expect(wrapper.find(content)).toBeTruthy();
});
