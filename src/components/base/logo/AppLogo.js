import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "assets/images/rightflow-logo.svg";

export default function AppLogo(props) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <Logo
      style={{
        width: props.width ? props.width : null,
        height: props.height ? props.height : null
      }}
    />
  );
}

AppLogo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};
