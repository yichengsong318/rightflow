import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as LogoIcon } from "assets/images/rightflow-logo-icon.svg";

export default function AppLogoIcon(props) {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <LogoIcon
      style={{
        width: props.width ? props.width : null,
        height: props.height ? props.height : null
      }}
    />
  );
}

AppLogoIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};
