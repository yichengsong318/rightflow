import React from "react";
import { StoreContext } from "redux-react-hook";
import { shallow } from "enzyme";
import FooterBar from "./FooterBar";
import FooterBarMenu from "components/layout/footer-bar-menu/FooterBarMenu";
import FooterBarBranding from "components/layout/footer-bar-branding/FooterBarBranding";

// add redux for state management
import { makeStore } from "store";
const store = makeStore();

it("Should render Footer bar", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <FooterBar />
    </StoreContext.Provider>
  );
  expect(wrapper.find(FooterBarMenu)).toBeTruthy();
  expect(wrapper.find(FooterBarBranding)).toBeTruthy();
});
