


import React from 'react';
import styles from './AvgBanner.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { assets } from "../../assets/assets.jsx";

const AvgBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <img src={assets.avgbanner} alt="AVS DEALS Logo" className={styles.brandLogo} />
        </div>

        <div className={styles.textSection}>
          <h1 className={styles.title}>AVG Internet Security</h1>
          <p className={styles.subtitle}>AVG AntiVirus</p>
          <div className={styles.callToAction}>
            <FaPhoneAlt className={styles.phoneIcon} />
            <h2 className={styles.callText}>
              CALL CUSTOMER CARE: <a href="tel:+919089898709" className={styles.phoneLink}>+91 90898 98709</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvgBanner;
