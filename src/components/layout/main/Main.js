import React, { useCallback, useEffect, useRef } from "react";
import { useMappedState } from "redux-react-hook";

export default function Welcome() {
  const hasMount = useRef(false);
  const mapState = useCallback(state => state.userIsConnected, []);
  const isConnected = useMappedState(mapState);

  useEffect(() => {
    if (!hasMount.current) {
      // componentDidMount
      if (isConnected) {
        //
      }
      hasMount.current = true;
    } else {
      // componentDidUpdate
    }
    return () => {
      // componentWillUnmount
    };
  });

  return <div></div>;
}
