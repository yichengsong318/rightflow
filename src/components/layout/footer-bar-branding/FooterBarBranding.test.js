import React from "react";
import { shallow } from "enzyme";

import FooterBarBranding from "./FooterBarBranding";
import { ReactComponent as BrandLogo } from "assets/images/logo-rightcom.svg";

const description = "A product of";

it("Should render Footer with text and logo", () => {
  const wrapper = shallow(<FooterBarBranding description={description} />);
  expect(wrapper.find(BrandLogo)).toBeTruthy();
  expect(wrapper.find(description)).toBeTruthy();
});
