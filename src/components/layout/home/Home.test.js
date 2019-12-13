import React from "react";
import { StoreContext } from "redux-react-hook";
import { shallow } from "enzyme";
import Home from "./Home";

// add redux for state management
import { makeStore } from "store";
const store = makeStore();

it("Should display home", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <Home />
    </StoreContext.Provider>
  );
  expect(wrapper.find("div")).toBeTruthy();
});
