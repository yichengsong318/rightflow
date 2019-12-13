import React from "react";
import PropTypes from "prop-types";
import AppsIcon from "@material-ui/icons/Apps";
import styles from "./TopNavBarMenu.module.css"; // [ComponentName].module.css auto import css-module include to create react app

export default function TopNavBarMenu(props) {
  return (
    <div className="flex items-center">
      <div className={styles.username + ` uppercase text-xs font-bold`}>
        {props.userName}
      </div>
      <div className={styles.menu_container}>
        <AppsIcon />
      </div>
    </div>
  );
}

TopNavBarMenu.propTypes = {
  userName: PropTypes.string.isRequired
};
