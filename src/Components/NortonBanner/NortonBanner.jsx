


import React from 'react';
import styles from './NortonBanner.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { assets } from "../../assets/assets.jsx";

const NortonBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <img src={assets.nortonbanner} alt="norot banner" className={styles.brandLogo} />
        </div>

        <div className={styles.textSection}>
          <h1 className={styles.title}>Norton 360 Deluxe Antivirus</h1>
          <p className={styles.subtitle}>Norton AntiVirus</p>
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

export default NortonBanner;
