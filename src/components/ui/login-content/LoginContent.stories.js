import React, { Suspense } from "react";
import { storiesOf } from "@storybook/react";
import Loader from "components/base/loader/Loader";
import LoginContent from "./LoginContent";
import "i18n"; // Import translation

// here catches the suspense from components not yet ready (still loading translations)
// alternative set useSuspense false on i18next.options.react when initializing i18next
export default function SuspenseWrapper({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

storiesOf("UI | LoginContent")
  .addDecorator(story => <SuspenseWrapper>{story()}</SuspenseWrapper>)
  .add("default", () => <LoginContent />);
