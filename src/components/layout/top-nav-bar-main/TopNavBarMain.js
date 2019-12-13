import React, { useRef, useCallback, useEffect } from "react";
import { useMappedState } from "redux-react-hook";
import AppLogo from "components/base/logo/AppLogo";
import TopNavBarMenu from "components/layout/top-nav-bar-menu/TopNavBarMenu";
import styles from "./TopNavBarMain.module.css"; // [ComponentName].module.css auto import css-module include to create react app

export default function TopNavBarMain() {
  const hasMount = useRef(false);
  const mapState = useCallback(state => state.userFullName, []);
  const userFullName = useMappedState(mapState);

  useEffect(() => {
    if (!hasMount.current) {
      // componentDidMount
      hasMount.current = true;
    } else {
      // componentDidUpdate
    }
    return () => {
      // componentWillUnmount
    };
  });
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <AppLogo style={{ width: "10rem" }} />
      </div>
      <div className="">
        <TopNavBarMenu userName={userFullName} />
      </div>
    </div>
  );
}
