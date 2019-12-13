import React from "react";
import { StoreContext } from "redux-react-hook";
import { shallow } from "enzyme";
import Login from "./Login";
import TopNavBarMain from "components/layout/top-nav-bar-main/TopNavBarMain";
import FooterBar from "components/layout/footer-bar/FooterBar";

// add redux for state management
import { makeStore } from "store";
const store = makeStore();

it("Should render login screen component", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <Login />
    </StoreContext.Provider>
  );
  expect(wrapper.find(TopNavBarMain)).toBeTruthy();
  expect(wrapper.find(FooterBar)).toBeTruthy();
});
