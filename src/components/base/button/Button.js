import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      disabled={props.disabled}
      type={props.type ? props.type : "button"}
      className={
        styles.button +
        " " +
        (props.color ? props.color : "primary") +
        " " +
        props.className
      }
      style={props.cssStyle}
      onClick={() => props.OnClicked && props.OnClicked()}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "danger"]),
  cssStyle: PropTypes.object,
  OnClicked: PropTypes.func
};
