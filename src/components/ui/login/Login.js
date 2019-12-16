import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import styles from "./Login.module.css";
import bgLogin from "assets/images/app-full-background.svg";

import TopNavBarMain from "components/layout/top-nav-bar-main/TopNavBarMain";
import FooterBar from "components/layout/footer-bar/FooterBar";
import LoginContent from "components/ui/login-content/LoginContent";

export default function Login() {
  const hasMount = useRef(false);

  useEffect(() => {
    if (!hasMount.current) {
      // componentDidMount
      hasMount.current = true;
    } else {
      // componentDidUpdate
    }
    return () => {
      // componentWillUnmount
    };
  });

  const Login__Container = styled.div`
    background-image: url(${bgLogin});
    height: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  `;

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Login__Container className="flex flex-col w-full">
      <div className={styles.top_navbar_container}>
        <div className="container">
          <TopNavBarMain />
        </div>
      </div>
      <div className="container">
        <div className={styles.content_container}>
          <LoginContent />
        </div>
      </div>
      <div className={styles.footer_container}>
        <div className="container">
          <FooterBar />
        </div>
      </div>
    </Login__Container>
  );
}
