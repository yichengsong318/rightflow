import React, { useEffect, useRef, useCallback, Suspense } from "react";
import { useMappedState } from "redux-react-hook";
import { useTranslation } from "react-i18next";
import Loader from "components/base/loader/Loader";
import styles from "./LoginContent.module.css";
import { Redirect } from "react-router-dom";
import { NAVIGATION } from "constants/constants";

export default function LoginContent() {
  const hasMount = useRef(false);
  const mapIsConnectedState = useCallback(state => state.userIsConnected, []);
  const isConnected = useMappedState(mapIsConnectedState);
  const [t] = useTranslation();

  useEffect(() => {
    if (!hasMount.current) {
      // componentDidMount
      // content here
      hasMount.current = true;
    } else {
      // componentDidUpdate
    }
    return () => {
      // componentWillUnmount
    };
  });

  return (
    <React.Fragment>
      {!isConnected ? (
        <Suspense fallback={<Loader />}>
          <div
            className={
              styles.content_container + ` flex flex-col items-center w-full`
            }
          >
            <div className={styles.info_container}>{t("login.welcome")}</div>
            <div className={styles.form_container}>
              <div className="form-item"></div>
            </div>
          </div>
        </Suspense>
      ) : (
        <Redirect to={NAVIGATION.APP} />
      )}
    </React.Fragment>
  );
}
