

// import React from "react";
// import styles from "../TopNav/TopNav.module.css";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { AiOutlineRight } from "react-icons/ai";


// const TopNav = () => {
//   return (
//     <div className={styles.topbar}>
//         <div className={styles.right}>
            
//         <p><AiOutlineRight />Purchase 15% off</p>
//       </div>
//       <div className={styles.left}>
//         <span><FaEnvelope /> info@mvsdeals.online</span>
//         <span><FaPhoneAlt /> +1-857-557-5285</span>
//       </div>
      
//     </div>
//   );
// };

// export default TopNav;


// import React from "react";
// import styles from "../TopNav/TopNav.module.css";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { AiOutlineRight } from "react-icons/ai";

// const TopNav = () => {
//   return (
//     <div className={styles.topbar}>
//       <div className={styles.right}>
//         <p><AiOutlineRight /> Purchase 15% off</p>
//       </div>
//       <div className={styles.left}>
//         <a href="mailto:info@mvsdeals.online">
//           <FaEnvelope /> info@mvsdeals.online
//         </a>
//         <a href="tel:+18575575285">
//           <FaPhoneAlt /> +1-857-557-5285
//         </a>
//       </div>
//     </div>
//   );
// };

// export default TopNav;

import React from "react";
import styles from "../TopNav/TopNav.module.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

const TopNav = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.right}>
        <p>
          <AiOutlineRight className={styles.arrowIcon} />
          <span>Purchase <strong>15% OFF</strong></span>
        </p>
      </div>
      <div className={styles.left}>
        <a href="mailto:info@mvsdeals.online">
          <FaEnvelope /> info@mvsdeals.online
        </a>
        <a href="tel:+1 (888) 9716668">
          <FaPhoneAlt /> +1 (888) 9716668
        </a>
      </div>
    </div>
  );
};

export default TopNav;

