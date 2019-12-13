import React from "react";
import { StoreContext } from "redux-react-hook";
import { shallow } from "enzyme";
import Welcome from "./Welcome";
import Splashscreen from "components/base/splashscreen/Splashscreen";

// add redux for state management
import { makeStore } from "store";
const store = makeStore();

it("Should render Splashscreen component", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <Welcome />
    </StoreContext.Provider>
  );
  expect(wrapper.find(Splashscreen)).toBeTruthy();
});
