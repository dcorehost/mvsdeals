


import React from 'react';
import styles from './AvgBanner.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { assets } from "../../assets/assets.jsx";

const AvgBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <img src={assets.avgbanner} alt="MVS DEALS Logo" className={styles.brandLogo} />
        </div>

        <div className={styles.textSection}>
          <h1 className={styles.title}>AVG Internet Security</h1>
          <p className={styles.subtitle}>AVG AntiVirus</p>
          <div className={styles.callToAction}>
            <FaPhoneAlt className={styles.phoneIcon} />
            <h2 className={styles.callText}>
              CALL CUSTOMER CARE: <a href="tel:+1 (888) 971-6668" className={styles.phoneLink}>+1 (888) 971-6668</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvgBanner;
