
import React from "react";
import styles from "../TopNav/TopNav.module.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

const TopNav = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <a href="mailto:info@mvsdeals.online">
          <FaEnvelope /> info@mvsdeals.online
        </a>
        <a href="tel:+1 (888) 971-6668">
          <FaPhoneAlt /> +1 (888) 971-6668
        </a>
      </div>
      <div className={styles.right}>
        <p>
          <AiOutlineRight className={styles.arrowIcon} />
          <span>Purchase <strong>15% OFF</strong></span>
        </p>
      </div>
    </div>
  );
};

export default TopNav;
