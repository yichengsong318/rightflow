import React from "react";
import { shallow } from "enzyme";

import Language from "./Language";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const currentLang = "en";

const languages = [
  { key: "en", name: "English" },
  { key: "fr", name: "Français" }
];

it("Should render current language", () => {
  const wrapper = shallow(
    <Language currentLang={currentLang} languages={languages} />
  );
  expect(wrapper.find("img")).toBeTruthy();
  expect(
    wrapper.find(languages.find(item => item.key === currentLang).name)
  ).toBeTruthy();
  expect(wrapper.find(KeyboardArrowDownIcon)).toBeTruthy();
});
