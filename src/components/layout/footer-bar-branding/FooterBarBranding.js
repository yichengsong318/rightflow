import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as BrandLogo } from "assets/images/logo-rightcom.svg";
import styles from "./FooterBarBranding.module.css"; // [ComponentName].module.css auto import css-module include to create react app

export default function FooterBarBranding(props) {
  return (
    <div className="flex items-center">
      <div className={styles.litte_description + ` text-xs`}>
        {props.description}
      </div>
      <div className={styles.brand_logo}>
        <BrandLogo />
      </div>
    </div>
  );
}

FooterBarBranding.propTypes = {
  description: PropTypes.string
};
