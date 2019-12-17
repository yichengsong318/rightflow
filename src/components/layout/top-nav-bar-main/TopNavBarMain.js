import React, { useRef, useCallback, useEffect } from "react";
import { useMappedState } from "redux-react-hook";
import AppLogo from "components/base/logo/AppLogo";
import TopNavBarMenu from "components/layout/top-nav-bar-menu/TopNavBarMenu";
import { Link } from "react-router-dom";
import { NAVIGATION } from "constants/constants";

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
      <div className="cursor-pointer">
        <Link to={NAVIGATION.HOME}>
          <AppLogo width="10rem" height="4rem" />
        </Link>
      </div>
      <div>
        <TopNavBarMenu userName={userFullName} />
      </div>
    </div>
  );
}
