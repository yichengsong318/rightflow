import React, { useCallback, Suspense } from "react";
import { useMappedState } from "redux-react-hook";
import Loader from "components/base/loader/Loader";
import { Redirect } from "react-router-dom";
import { NAVIGATION } from "constants/constants";

export default function AppView() {
  const mapIsConnectedState = useCallback(state => state.userIsConnected, []);
  const userIsConnected = useMappedState(mapIsConnectedState);

  return (
    <React.Fragment>
      {userIsConnected ? (
        <Suspense fallback={<Loader />}>
          <div className="w-full h-full flex items-center justify-center">
            App coming soon...
          </div>
        </Suspense>
      ) : (
        <Redirect to={NAVIGATION.LOGIN} />
      )}
    </React.Fragment>
  );
}
