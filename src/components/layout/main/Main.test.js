import React from "react";
import { StoreContext } from "redux-react-hook";
import { shallow } from "enzyme";
import Main from "./Main";

// add redux for state management
import { makeStore } from "store";
const store = makeStore();

it("Should works", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <Main />
    </StoreContext.Provider>
  );
  expect(wrapper.find("StoreContext")).toBeTruthy();
});
