/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import bgSplashscreen from "assets/images/splashscreen-background.svg";
import AppLogo from "components/base/logo/AppLogo";
import AppLogoIcon from "components/base/logo-icon/AppLogoIcon";
// import { useMappedState } from "redux-react-hook";

const SplashscreenContainer = styled.div`
  background: url(${bgSplashscreen}) no-repeat bottom;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export default function Splashscreen(props) {
  const hasMount = useRef(false);
  const [delaying, setDelaying] = useState(false);
  // const mapState = useCallback(state => state.timeDelaySplashscreen, []);
  // const delayTime = useMappedState(mapState);

  useEffect(() => {
    if (!hasMount.current) {
      // componentDidMount
      if (props.static) {
        // For render static state of this component
        if (props.static === "delaying") {
          setDelaying(true);
        } else if (props.static === "fulled") {
          setDelaying(false);
        }
      } else {
        initDelay();
      }
      hasMount.current = true;
    } else {
      // componentDidUpdate
    }
    return () => {
      // componentWillUnmount
    };
  });

  const initDelay = () => {
    setDelaying(true);
    setTimeout(() => {
      setDelaying(false);
    }, props.delay);
  };

  return (
    <SplashscreenContainer className="w-full h-full flex items-center justify-center">
      {delaying ? (
        <div className="transition-all transition-500 transition-linear">
          <AppLogoIcon />
        </div>
      ) : (
        <div className="transition-all transition-500 transition-linear">
          <AppLogo />
        </div>
      )}
    </SplashscreenContainer>
  );
}

Splashscreen.propTypes = {
  static: PropTypes.string,
  delay: PropTypes.number
};

Splashscreen.defaultProps = {
  delay: 600
};
