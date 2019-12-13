import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useMappedState } from "redux-react-hook";
// import styles from "./FooterBar.module.css"; // [ComponentName].module.css auto import css-module include to create react app

import FooterBarMenu from "components/layout/footer-bar-menu/FooterBarMenu";
import FooterBarBranding from "components/layout/footer-bar-branding/FooterBarBranding";

export default function FooterBar() {
  const mapCurrentLangState = useCallback(state => state.siteCopyright, []);
  const siteCopyright = useMappedState(mapCurrentLangState);
  return (
    <div className="flex items-center justify-between">
      <FooterBarMenu />
      <FooterBarBranding description={siteCopyright} />
    </div>
  );
}

FooterBar.propTypes = {
  description: PropTypes.string
};
