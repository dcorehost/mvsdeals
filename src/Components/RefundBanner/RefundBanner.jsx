import React from "react";
import styles from "./RefundBanner.module.css";

const RefundBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <h1 className={styles.bannerHeading}>Refund Policy</h1>
    </div>
  );
};

export default RefundBanner;
