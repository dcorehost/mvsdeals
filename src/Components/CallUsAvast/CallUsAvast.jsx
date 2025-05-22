import React from 'react';
import styles from './CallUsAvast.module.css';
import { FaPhoneAlt } from 'react-icons/fa';

const CallUsAvast = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.callContainer}>
        <FaPhoneAlt className={styles.phoneIcon} />
        <h1 className={styles.bannerTitle}>
          CALL US: <a href="tel:+1 (888) 9716668" className={styles.phoneLink}>+1 (888) 9716668</a>
        </h1>
      </div>
    </div>
  );
};

export default CallUsAvast;
