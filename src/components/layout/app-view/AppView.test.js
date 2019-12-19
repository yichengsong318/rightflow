import React from "react";
import { shallow } from "enzyme";
import { StoreContext } from "redux-react-hook";

import AppView from "./AppView";
// add redux for state management
import { makeStore } from "store";
const store = makeStore();

const content = "App";

it("Should render app layout", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <AppView />
    </StoreContext.Provider>
  );
  expect(wrapper.find(content)).toBeTruthy();
});
