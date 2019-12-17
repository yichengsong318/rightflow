import React, {
  useEffect,
  useCallback,
  Suspense,
  useState,
  useRef
} from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import { useTranslation } from "react-i18next";
import Loader from "components/base/loader/Loader";
import styles from "./LoginContent.module.css";
import { Redirect } from "react-router-dom";
import useForm from "react-hook-form";
import { NAVIGATION } from "constants/constants";
import Button from "components/base/button/Button";
import useHttpService from "services/HttpService";
import uuid1 from "uuid/v1";

export default function LoginContent() {
  const unmounted = useRef(false);
  const [SIO_CHANNEL_SIGNIN] = useState("signin_" + uuid1());
  const [t] = useTranslation();
  const [infoMessage, setInfoMessage] = useState(t("login.welcome"));
  const [infoStatus, setInfoStatus] = useState("");
  const mapIsConnectedState = useCallback(state => state.userIsConnected, []);
  const userIsConnected = useMappedState(mapIsConnectedState);
  const mapSocketIoInstance = useCallback(state => state.socketIoInstance, []);
  const socketIoInstance = useMappedState(mapSocketIoInstance);
  const { register, errors, handleSubmit } = useForm();
  const {
    send,
    data: loginResponse,
    loading: onLoadingLogin,
    error: onErrorLogin
  } = useHttpService("SIGNIN");
  const dispatch = useDispatch();
  const updateUserInfo = useCallback(
    user => dispatch({ type: "UPDATE_USER_INFO", value: user }),
    [dispatch]
  );
  const updateUserIsConnected = useCallback(
    status => dispatch({ type: "UPDATE_USER_IS_CONNECTED", value: status }),
    [dispatch]
  );

  useEffect(() => {
    socketIoInstance.on(SIO_CHANNEL_SIGNIN, response =>
      onResponseSocketSignin(response)
    );
    return () => {
      unmounted.current = true;
      socketIoInstance.off(SIO_CHANNEL_SIGNIN);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SIO_CHANNEL_SIGNIN, socketIoInstance]);

  // Login submit result hook
  useEffect(() => {
    if (!unmounted.current) {
      if (!onLoadingLogin && onErrorLogin) {
        setInfoStatus("error");
        setInfoMessage(t("error.something_went_wrong"));
      }
      if (!onLoadingLogin && loginResponse) {
        if (loginResponse.status !== 202) {
          setInfoStatus("error");
          setInfoMessage(t("error.something_went_wrong"));
        }
      }
    }
  }, [loginResponse, onErrorLogin, onLoadingLogin, t]);

  function onResponseSocketSignin(response) {
    if (!unmounted.current) {
      if (response && response.status === 200) {
        // Login successfull
        updateUserInfo({
          email: response.data.email,
          firstname: response.data.firstname,
          lastname: response.data.lastname
        });
        setInfoStatus("success");
        setInfoMessage(t("login.signin_success"));
        setTimeout(() => {
          updateUserIsConnected(true);
        }, 600);
      } else if (response.status === 404) {
        setInfoStatus("error");
        setInfoMessage(t("login.wrong_email_or_password"));
      } else {
        setInfoStatus("error");
        setInfoMessage(t("login.wrong_email_or_password"));
      }
    }
  }

  function postLogin(data, e) {
    e.preventDefault();
    setInfoStatus("loading");
    setInfoMessage(t("login.attempt_signin"));
    // send({ ...data, sio_channel: SIO_CHANNEL_SIGNIN });
    // call dummy login
    postLoginMock(data);
  }

  function postLoginMock(data) {
    setTimeout(() => {
      if (data.email === "demo@right-com.com" && data.password === "123") {
        updateUserInfo({
          email: "demo@right-com.com",
          firstname: "Harold",
          lastname: "Meks-Ajagu"
        });
        setInfoStatus("success");
        setInfoMessage(t("login.signin_success"));
        setTimeout(() => {
          updateUserIsConnected(true);
        }, 600);
      } else {
        setInfoStatus("error");
        setInfoMessage(t("login.wrong_email_or_password"));
      }
    }, 3000);
  }

  return (
    <React.Fragment>
      {!userIsConnected ? (
        <Suspense fallback={<Loader />}>
          <div
            className={
              styles.content_container + ` flex flex-col items-center w-full`
            }
          >
            <div className={styles.info_container + " " + infoStatus}>
              {infoMessage}
            </div>
            <form
              onSubmit={handleSubmit((d, e) => postLogin(d, e))}
              className={styles.form_container}
            >
              <div className={styles.form_item}>
                <input
                  name="email"
                  placeholder={t("login.email_placeholder")}
                  className={styles.form_control}
                  autoComplete="on"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    }
                  })}
                />
                {errors.email && (
                  <div className="form-help error">
                    {t("login.invalid_email_address")}
                  </div>
                )}
              </div>
              <div className={styles.form_item}>
                <input
                  name="password"
                  autoComplete="off"
                  className={styles.form_control}
                  placeholder={t("login.password_placeholder")}
                  type="password"
                  ref={register({ required: true })}
                />
                {errors.password && (
                  <div className="form-help error">
                    {t("login.required_password")}
                  </div>
                )}
              </div>
              <div className={styles.form_item}>
                <div className="flex items-center justify-between">
                  <div
                    className={
                      styles.form_container_remember_me + ` flex items-center`
                    }
                  >
                    <input
                      type="checkbox"
                      name="remeberme"
                      id="remeberme"
                      ref={register}
                      className="mr-2"
                    />
                    <label htmlFor="remeberme">{t("login.remember_me")}</label>
                  </div>
                  <div
                    className={
                      styles.form_container_forgot_password +
                      ` flex items-center`
                    }
                  >
                    {t("login.forgot_password")}
                  </div>
                </div>
              </div>
              <div
                className={
                  styles.form_item + " " + styles.form_container_submit
                }
              >
                <Button
                  type="submit"
                  className="w-full"
                  cssStyle={{ fontSize: ".75rem" }}
                  disabled={
                    infoStatus === "loading" || infoStatus === "success"
                  }
                >
                  {infoStatus === "loading" || infoStatus === "success" ? (
                    <div className="w-full flex items-center justify-center">
                      <Loader />
                    </div>
                  ) : (
                    <React.Fragment>{t("login.submit_login")}</React.Fragment>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </Suspense>
      ) : (
        <Redirect to={NAVIGATION.ONBOARDING} />
      )}
    </React.Fragment>
  );
}
