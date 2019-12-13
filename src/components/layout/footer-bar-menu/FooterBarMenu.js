import React, { useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useMappedState } from "redux-react-hook";
import Language from "components/base/language/Language";
import styles from "./FooterBarMenu.module.css"; // [ComponentName].module.css auto import css-module include to create react app

export default function FooterBarMenu() {
  const hasMount = useRef(false);
  const mapCurrentLangState = useCallback(state => state.currentLang, []);
  const currentLang = useMappedState(mapCurrentLangState);
  const mapLanguagesState = useCallback(state => state.languages, []);
  const languages = useMappedState(mapLanguagesState);

  useEffect(() => {
    if (!hasMount.current) {
      // ComponentDidMount

      hasMount.current = true;
    } else {
      // ComponentDidUpdate
    }
    return () => {
      // componentWillUnmount
    };
  });

  return (
    <div className="flex items-center">
      <div className={styles.language}>
        <Language currentLang={currentLang} languages={languages} />
      </div>
      <div className="text-xs font-bold uppercase">Help</div>
    </div>
  );
}

FooterBarMenu.propTypes = {
  description: PropTypes.string
};
