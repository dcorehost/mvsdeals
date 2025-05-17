import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import styles from "./MainNav.module.css";

const MainNav = () => {
  const { pathname } = useLocation();
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleShopMenu = () => {
    setIsShopOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>AVS DEALS</h1>
      </div>
      <ul className={styles.navLinks}>
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
              <li><Link to="/mcafeeantivirus">McAfeeAntivirus</Link></li>
              <li><Link to="/shop/clothing">Clothing</Link></li>
              <li><Link to="/shop/home-appliances">Home Appliances</Link></li>
              <li><Link to="/shop/accessories">Accessories</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/account">My Account</Link></li>
      </ul>
      <div className={styles.cartIcon}>🛒</div>
    </nav>
  );
};

export default MainNav;
