import React, { useCallback, useEffect, useRef } from "react";
import { useMappedState } from "redux-react-hook";
import { Redirect } from "react-router-dom";
import { NAVIGATION } from "constants/constants";

export default function Home() {
  const hasMount = useRef(false);
  const mapIsConnectedState = useCallback(state => state.userIsConnected, []);
  const userIsConnected = useMappedState(mapIsConnectedState);
  const mapViewOnbording = useCallback(state => state.viewOnbording, []);
  const viewOnbording = useMappedState(mapViewOnbording);

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

  function HandleMainRoute() {
    if (userIsConnected) {
      if (viewOnbording) {
        return <Redirect to={NAVIGATION.APP} />;
      } else {
        return <Redirect to={NAVIGATION.ONBOARDING} />;
      }
    } else {
      return <Redirect to={NAVIGATION.LOGIN} />;
    }
  }

  return <HandleMainRoute />;
}
