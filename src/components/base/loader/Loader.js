import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as LoadingCircle } from "assets/images/loading.svg";

export default function Loader(props) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <LoadingCircle
      style={{
        width: props.width ? props.width : null,
        height: props.height ? props.height : null
      }}
    />
  );
}

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};
