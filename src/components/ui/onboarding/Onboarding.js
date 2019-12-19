import React, { useCallback, Suspense, useState, useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import Loader from "components/base/loader/Loader";
import { Redirect } from "react-router-dom";
import { NAVIGATION } from "constants/constants";
import styled from "styled-components";
import styles from "./Onboarding.module.css";
import bgPage from "assets/images/app-full-background.svg";
import ArtworkImg from "assets/images/Artwork.png";
import BoardImg from "assets/images/board.png";
import GroupImg from "assets/images/Group1265.png";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import TopNavBarMain from "components/layout/top-nav-bar-main/TopNavBarMain";
import FooterBar from "components/layout/footer-bar/FooterBar";
import OnboardingContent from "components/ui/onboarding-content/OnboardingContent";
import Button from "components/base/button/Button";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function Onboarding() {
  const mapIsConnectedState = useCallback(state => state.userIsConnected, []);
  const userIsConnected = useMappedState(mapIsConnectedState);
  const mapViewOnbording = useCallback(state => state.viewOnbording, []);
  const viewOnbording = useMappedState(mapViewOnbording);
  const [onboardingNumber, setOnboardingNumber] = useState(1);
  const [onboardingData, setOnboardingData] = useState(null);
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const updateViewOnboading = useCallback(
    user => dispatch({ type: "UPDATE_VIEW_ONBOARDING", value: user }),
    [dispatch]
  );

  const onNextScreen = useCallback(() => {
    if (onboardingNumber <= 2) {
      setOnboardingNumber(prev => prev + 1);
    } else {
      // End of onboarding
      updateViewOnboading(true);
    }
  }, [onboardingNumber, updateViewOnboading]);

  const onPrevScreen = useCallback(() => {
    if (onboardingNumber > 1) {
      setOnboardingNumber(prev => prev - 1);
    }
  }, [onboardingNumber]);

  useEffect(() => {
    function getOnboardingData(number) {
      let data = {};
      switch (number) {
        case 1:
          data.id = number;
          data.title = (
            <span>
              {t("onboarding.NUMBER_1.title1")}
              <br />
              {t("onboarding.NUMBER_1.title2")}
            </span>
          );
          data.description = t("onboarding.NUMBER_" + number + ".description");
          data.image = (
            <img
              src={ArtworkImg}
              alt="Artwork"
              style={{ marginLeft: "auto" }}
            />
          );
          data.scrollNext = (
            <div
              style={{ color: "#A75CAF" }}
              className="uppercase cursor-pointer font-bold text-xs flex items-center"
              onClick={() => onNextScreen()}
            >
              <span>{t("onboarding.scroll_read_more")}</span>
              <ArrowDownwardIcon
                style={{ height: ".7rem", color: "#A75CAF" }}
              />
            </div>
          );
          data.action = (
            <Button OnClicked={() => onNextScreen()}>
              <span className="px-6">{t("onboarding.get_started")}</span>
            </Button>
          );
          break;
        case 2:
          data.id = number;
          data.title = t("onboarding.NUMBER_2.title");
          data.description = t("onboarding.NUMBER_2.description");
          data.image = (
            <img src={BoardImg} alt="Board" style={{ marginLeft: "auto" }} />
          );
          data.scrollNext = (
            <div
              style={{ color: "#3487EA" }}
              className="uppercase cursor-pointer font-bold text-xs flex items-center"
              onClick={() => onNextScreen()}
            >
              <span>{t("onboarding.scroll_read_more")}</span>
              <ArrowDownwardIcon
                style={{ height: ".7rem", color: "#3487EA" }}
              />
            </div>
          );
          data.action = (
            <div>
              <FiberManualRecordIcon
                onClick={() => onPrevScreen()}
                className="cursor-pointer mr-1"
                style={{ height: ".7rem", width: ".7rem", color: "#EDEDED" }}
              />
              <FiberManualRecordIcon
                style={{ height: ".7rem", width: ".7rem", color: "#A75CAF" }}
              />
              <FiberManualRecordIcon
                onClick={() => onNextScreen()}
                className="cursor-pointer ml-1"
                style={{ height: ".7rem", width: ".7rem", color: "#EDEDED" }}
              />
            </div>
          );
          break;
        case 3:
          data.id = number;
          data.title = t("onboarding.NUMBER_3.title");
          data.description = t("onboarding.NUMBER_3.description");
          data.image = (
            <img src={GroupImg} alt="Group" style={{ marginLeft: "auto" }} />
          );
          data.scrollNext = null;
          data.action = (
            <Button OnClicked={() => onNextScreen()}>
              <span className="px-6">{t("onboarding.go_to_setup")}</span>
            </Button>
          );
          break;
        default:
          break;
      }
      return data;
    }
    const data = getOnboardingData(onboardingNumber);
    if (data.title) {
      setOnboardingData(data);
    }
  }, [onNextScreen, onPrevScreen, onboardingNumber, t]);

  const OnboardingContainerNode = styled.div`
    background-image: url(${bgPage});
    height: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  `;

  return (
    <React.Fragment>
      {userIsConnected ? (
        <Suspense fallback={<Loader />}>
          <OnboardingContainerNode className="flex flex-col w-full">
            <div className={styles.top_navbar_container}>
              <div className="container">
                <TopNavBarMain />
              </div>
            </div>
            <div className={styles.body_content_container}>
              <div className="container">
                <div className={styles.content_container}>
                  {!viewOnbording ? (
                    onboardingData ? (
                      <OnboardingContent
                        id={onboardingData.id}
                        title={onboardingData.title}
                        description={onboardingData.description}
                        image={onboardingData.image}
                        scrollNext={onboardingData.scrollNext}
                        onNext={onNextScreen}
                        action={onboardingData.action}
                      />
                    ) : (
                      <Loader />
                    )
                  ) : (
                    <Redirect to={NAVIGATION.APP} />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.footer_container}>
              <div className="container">
                <FooterBar />
              </div>
            </div>
          </OnboardingContainerNode>
        </Suspense>
      ) : (
        <Redirect to={NAVIGATION.LOGIN} />
      )}
    </React.Fragment>
  );
}
