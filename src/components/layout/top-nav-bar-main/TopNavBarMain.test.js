import React from "react";
import { StoreContext } from "redux-react-hook";
import { shallow } from "enzyme";

import TopNavBarMain from "./TopNavBarMain";
import AppsIcon from "@material-ui/icons/Apps";

// add redux for state management
import { makeStore } from "store";
const store = makeStore();

const userName = "John Doe";

it("Should render top nav bar menu with username and icon apps ", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <TopNavBarMain userName={userName} />
    </StoreContext.Provider>
  );
  expect(wrapper.find(AppsIcon)).toBeTruthy();
  expect(wrapper.find(userName)).toBeTruthy();
});
