import React from "react";
import { StoreContext } from "redux-react-hook";
import { shallow } from "enzyme";
import Artwork from "assets/images/Artwork.svg";
import OnboardingContent from "./OnboardingContent";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

// add redux for state management
import { makeStore } from "store";
const store = makeStore();

const data = {
  id: 1,
  title: "Hello there, welcome to RightFlow",
  description:
    "Time to get started and easily set up devices (hardware & software) at initial login so that you can start create events subsequently manage your data"
};

const scrollNext = () => {
  return (
    <div>
      <span>SCROLL TO READ MORE</span>
      <ArrowDownwardIcon />
    </div>
  );
};

it("Should render onboarding screen", () => {
  const wrapper = shallow(
    <StoreContext.Provider value={store}>
      <OnboardingContent
        id={data.id}
        title={data.title}
        description={data.description}
        image={<Artwork />}
        scrollNext={scrollNext}
        onNext={() => console.log("Works")}
      />
    </StoreContext.Provider>
  );
  expect(wrapper.find("div")).toBeTruthy();
});
