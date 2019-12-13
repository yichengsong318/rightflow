import React, { useCallback, useEffect, useRef } from "react";
import { useMappedState } from "redux-react-hook";

import Splashscreen from "components/base/splashscreen/Splashscreen";

export default function Welcome() {
  const hasMount = useRef(false);
  const mapState = useCallback(state => state.timeDelaySplashscreen, []);
  const delayTime = useMappedState(mapState);

  useEffect(() => {
    if (!hasMount.current) {
      // componentDidMount
      startDelay();
      hasMount.current = true;
    } else {
      // componentDidUpdate
    }
    return () => {
      // componentWillUnmount
    };
  });

  function startDelay() {
    setTimeout(() => {
      // redirect to render main app component
      console.log("redirect in main app");
    }, delayTime + 1000);
  }

  return (
    <div className="flex w-full h-full">
      <Splashscreen delay={delayTime} />
    </div>
  );
}
