import React from "react";
import { shallow } from "enzyme";
import { StoreContext } from "redux-react-hook";

import Onboarding from "./Onboarding";

// add redux for state management
import { makeStore } from "store";
const store = makeStore();

const content = "Onboarding";

it("Should render onboarding screen", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <Onboarding />
    </StoreContext.Provider>
  );
  expect(wrapper.find(content)).toBeTruthy();
});
