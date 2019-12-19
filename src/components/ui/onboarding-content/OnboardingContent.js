import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loader from "components/base/loader/Loader";
import styles from "./OnboardingContent.module.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function OnboardingContent(props) {
  const [onNextEmitted, setOnNextEmitted] = useState(false);
  useEffect(() => {
    setOnNextEmitted(false);
    window.scroll(0, 0);
  }, [props.id]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (prevPos.y > currPos.y && currPos.y < -75) {
        if (props.scrollNext) {
          if (!onNextEmitted && !onNextEmitted) {
            setOnNextEmitted(true);
            // props.onNext();
            return;
          }
        }
      }
    },
    [onNextEmitted]
  );

  return (
    <Suspense fallback={<Loader />}>
      <div className="flex">
        <div className="w-full flex smMax:flex-col-reverse flex-row items-center">
          <div className={styles.text_container + ` flex flex-col`}>
            <div className={styles.block_title}>{props.title}</div>
            <div className={styles.block_description}>{props.description}</div>
            <div className={styles.block_action}>{props.action}</div>
          </div>
          <div className={styles.image_container + ` flex items-center`}>
            {props.image}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-6 pt-3">
        {props.scrollNext}
      </div>
    </Suspense>
  );
}

OnboardingContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
  image: PropTypes.any.isRequired,
  action: PropTypes.any,
  scrollNext: PropTypes.any,
  onNext: PropTypes.func.isRequired
};
