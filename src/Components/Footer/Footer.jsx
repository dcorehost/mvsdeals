
import React from 'react';
import styles from './Footer.module.css';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { assets } from "../../assets/assets.jsx";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brandSection}>
            <h1 className={styles.brandTitle}>MVS DEALS</h1>
            <p className={styles.brandText}>
              At www.mvsdeals.online, we're committed to being your reliable tech partner, 
              delivering the guidance, services, and ease you need – all with competitive pricing.
            </p>
            <img src={assets.footerlogo} alt="MVS DEALS Logo" className={styles.brandLogo} />
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linksColumn}>
              <h3 className={styles.linksTitle}>Useful Links</h3>
              <ul className={styles.linksList}>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/shipping-policy">Shipping Policy</a></li>
                <li><a href="/refund-policy">Refund Policy</a></li>
                <li><a href="/terms-conditions">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.linksTitle}>Quick Links</h3>
              <ul className={styles.linksList}>
                <li><a href="/nortonantivirus">Products</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/account">My Account</a></li>
              </ul>
            </div>           
            <div className={styles.linksColumn}>
               <h3 className={styles.linksTitle}>Contact Info</h3>
              <ul className={styles.linksList}>
            <li>
            <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:info@mvsdeals.online" className={styles.contactLink}>info@mvsdeals.online</a>
          </li>
         <li>
           <FaPhoneAlt className={styles.contactIcon} />
         <a href="tel:+18575575285" className={styles.contactLink}>+1 (888) 971-6668</a>
       </li>
       <li>
        <HiLocationMarker className={styles.contactIcon} />
           9 9th Ave, New York, NY 10014, United States
           </li>
            <li className={styles.paymentItem}>
            <img src={assets.visa} alt="VISA" className={styles.paymentLogo} />
         </li>
        </ul>
       </div>

          </div>
        </div>
      </div>

      {/* Full-width copyright section moved outside container */}
      <div className={styles.copyrightSection}>
        <p>
          © 2025 mvsdeals.online All trademarks, brand names, and logos are owned by their respective owners; 
          we claim no ownership. Any third-party trademarks used are solely for reference, with no endorsement implied. 
          We promote only our own products and services.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
