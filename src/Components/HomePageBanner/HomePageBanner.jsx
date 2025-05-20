import React from 'react';
import styles from './HomePageBanner.module.css';
import { assets } from "../../assets/assets.jsx";
import { FaShoppingCart, FaSmile } from 'react-icons/fa';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { SlWallet } from "react-icons/sl";

const HomePageBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div 
        className={styles.banner}
        style={{ backgroundImage: `url(${assets.homebanner})` }}
      >
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Protect Your Devices</h1>
          <p className={styles.bannerText}>
            Get top-rated antivirus protection from McAfee or Norton. Safeguard your devices against 
            the latest threats with reliable and innovative security solutions.
          </p>
          <button className={styles.discoverButton}>Discover Shop</button>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <FaShoppingCart className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Online Order</h3>
            <p className={styles.cardText}>Shop at your comfort</p>
          </div>
        </div>
        <div className={styles.card}>
          <IoCloudDownloadOutline className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Instant Download</h3>
            <p className={styles.cardText}>Get it at your email</p>
          </div>
        </div>
        <div className={styles.card}>
          <SlWallet className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Safe Payment</h3>
            <p className={styles.cardText}>Secure payment channels</p>
          </div>
        </div>
        <div className={styles.card}>
          <FaSmile className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Customer Satisfaction</h3>
            <p className={styles.cardText}>Your smile is our reward</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;


