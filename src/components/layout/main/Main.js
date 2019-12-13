import React, { useEffect, useRef, useState } from "react";
// import { useMappedState } from "redux-react-hook";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "components/ui/login/Login";
import Welcome from "components/ui/welcome/Welcome";
import NotFound from "components/ui/not-found/NotFound";
import Forbidden from "components/ui/forbidden/Forbidden";
import InternalError from "components/ui/internal-error/InternalError";
import Home from "components/layout/home/Home";
import AppView from "components/layout/app-view/AppView";
import Onboarding from "components/ui/onboarding/Onboarding";
import { NAVIGATION } from "constants/constants";

export default function Main() {
  const [welcomeEnded, setWelcomeEnded] = useState(false);
  const hasMount = useRef(false);

  const mainRoutes = [
    { path: NAVIGATION.LOGIN, exact: true, component: Login },
    { path: NAVIGATION.ONBOARDING, exact: false, component: Onboarding },
    { path: NAVIGATION.APP, exact: false, component: AppView },
    { path: NAVIGATION.NOT_FOUND, exact: true, component: NotFound },
    { path: NAVIGATION.FORBIDDEN, exact: true, component: Forbidden },
    { path: NAVIGATION.INTERNAL_ERROR, exact: true, component: InternalError }
  ];

  useEffect(() => {
    if (!hasMount.current) {
      // componentDidMount
    } else {
      // componentDidUpdate
    }
    return () => {
      // componentWillUnmount
    };
  });

  function InitializingHandler() {
    if (!hasMount.current) {
      hasMount.current = true;
    }
    return <Welcome onLoaded={() => onWelcomeEnded()} />;
  }

  function onWelcomeEnded() {
    setWelcomeEnded(true);
  }

  return (
    <React.Fragment>
      {hasMount.current && welcomeEnded ? (
        <Switch>
          {mainRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
          <Route exact path="/" component={Home}></Route>
          <Route
            path="*"
            render={({ location }) => <Redirect to={NAVIGATION.NOT_FOUND} />}
          ></Route>
        </Switch>
      ) : (
        <InitializingHandler />
      )}
    </React.Fragment>
  );
}
