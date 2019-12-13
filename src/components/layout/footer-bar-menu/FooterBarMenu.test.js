import React from "react";
import { StoreContext } from "redux-react-hook";
import { shallow } from "enzyme";
import FooterBarMenu from "./FooterBarMenu";
import { ReactComponent as BrandLogo } from "assets/images/logo-rightcom.svg";

// add redux for state management
import { makeStore } from "store";
const store = makeStore();

const description = "A product of";

it("Should render Footer with text and logo", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <FooterBarMenu description={description} />
    </StoreContext.Provider>
  );
  expect(wrapper.find(BrandLogo)).toBeTruthy();
  expect(wrapper.find(description)).toBeTruthy();
});
