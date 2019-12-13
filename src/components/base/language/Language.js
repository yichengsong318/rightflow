import React from "react";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FlagImg from "assets/images/united-kingdom.png";
import styles from "./Language.module.css";

export default function Language(props) {
  const supportedLangs = [];
  if (props.languages && Array.isArray(props.languages)) {
    props.languages.forEach(lang => {
      supportedLangs.push({ key: lang.key, name: lang.name });
    });
  }

  const currentLangData = supportedLangs.find(
    lang => lang.key === props.currentLang
  );

  return (
    <div className="flex items-center">
      <div className={styles.flag + ` mr-2`}>
        {props.currentLang === "en" && (
          <img src={FlagImg} alt="United Kingdom" />
        )}
      </div>
      <div
        className={
          styles.current_language +
          ` uppercase font-bold text-xs opacity-100 mr-1`
        }
      >
        {currentLangData ? currentLangData.name : null}
      </div>
      <div className={styles.dropdown_icon}>
        <KeyboardArrowDownIcon fontSize="small" style={{ color: "#919191" }} />
      </div>
    </div>
  );
}

Language.propTypes = {
  currentLang: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};
