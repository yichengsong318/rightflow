import React, { useCallback, useEffect, useRef } from "react";
import { useMappedState } from "redux-react-hook";

import Splashscreen from "components/base/splashscreen/Splashscreen";

export default function Welcome(props) {
  const hasMount = useRef(false);
  const mapTransitionState = useCallback(
    state => state.timeTransitionSplashscreen,
    []
  );
  const transitionTime = useMappedState(mapTransitionState);
  const mapDurationState = useCallback(
    state => state.timeDurationSplashscreen,
    []
  );
  const durationTime = useMappedState(mapDurationState);

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
      props.onLoaded(true);
    }, transitionTime + durationTime);
  }

  return (
    <div className="flex w-full h-full">
      <Splashscreen delay={transitionTime} />
    </div>
  );
}
