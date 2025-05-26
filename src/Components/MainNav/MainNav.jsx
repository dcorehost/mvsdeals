

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import styles from "./MainNav.module.css";

const MainNav = () => {
  const { pathname } = useLocation();
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleShopMenu = () => {
    setIsShopOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/" className={pathname === "/" ? styles.active : ""}>
          MVS Deals
        </Link>
      </div>
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <li>
          <Link to="/" className={pathname === "/" ? styles.active : ""}>
            Home
          </Link>
        </li>

        <li
          className={styles.dropdown}
          onClick={toggleShopMenu}
          onMouseEnter={() => setIsShopOpen(true)}
          onMouseLeave={() => setIsShopOpen(false)}
        >
          <span className={styles.dropdownToggle}>
            Shop
            <FaChevronDown
              className={`${styles.dropdownIcon} ${isShopOpen ? styles.rotate : ""}`}
            />
          </span>
          {isShopOpen && (
            <ul className={styles.dropdownMenu}>
              <li><Link to="/mcafeeantivirus">McAfee Antivirus</Link></li>
              <li><Link to="/nortonantivirus">Norton Antivirus</Link></li>
              <li><Link to="/avgantivirus">AVG Antivirus</Link></li>
              <li><Link to="/avastantivirus">Avast Antivirus</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/account">My Account</Link></li>
        <li>
          <Link to="/cart" className={styles.cartIcon}>
            🛒
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;