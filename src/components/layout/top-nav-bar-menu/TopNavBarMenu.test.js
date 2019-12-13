import React from "react";
import { shallow } from "enzyme";

import TopNavBarMenu from "./TopNavBarMenu";
import AppsIcon from "@material-ui/icons/Apps";

const userName = "John Doe";

it("Should render top nav bar menu with username and icon apps ", () => {
  const wrapper = shallow(<TopNavBarMenu userName={userName} />);
  expect(wrapper.find(AppsIcon)).toBeTruthy();
  expect(wrapper.find(userName)).toBeTruthy();
});
