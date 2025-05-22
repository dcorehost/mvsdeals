


import React from 'react';
import styles from './McaBanner.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { assets } from "../../assets/assets.jsx";

const McaBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <img src={assets.mcabanner} alt="MVS DEALS Logo" className={styles.brandLogo} />
        </div>

        <div className={styles.textSection}>
          <h1 className={styles.title}>McAfee Total Protection</h1>
          <p className={styles.subtitle}>McAfee AntiVirus</p>
          <div className={styles.callToAction}>
            <FaPhoneAlt className={styles.phoneIcon} />
            <h2 className={styles.callText}>
              CALL CUSTOMER CARE: <a href="tel:+1 (888) 9716668" className={styles.phoneLink}>+1 (888) 9716668</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default McaBanner;
