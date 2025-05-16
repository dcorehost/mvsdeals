// import React from "react";
// import styles from "../TopNav/TopNav.module.css";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const TopNav = () => {
//   return (
//     <div className={styles.topbar}>
//       <div className={styles.left}>
//         <span><FaEnvelope /> info@avsdeals.online</span>
//         <span><FaPhoneAlt /> +1-857-557-5285</span>
//       </div>
//       <div className={styles.right}>
//         <p>Purchase Now and get Up to 15% off</p>
//       </div>
//     </div>
//   );
// };

// export default TopNav;


import React from "react";
// import styles from "./TopNav.module.css";
import styles from "../TopNav/TopNav.module.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";


const TopNav = () => {
  return (
    <div className={styles.topbar}>
        <div className={styles.right}>
            
        <p><AiOutlineRight />Purchase 15% off</p>
      </div>
      <div className={styles.left}>
        <span><FaEnvelope /> info@avsdeals.online</span>
        <span><FaPhoneAlt /> +1-857-557-5285</span>
      </div>
      
    </div>
  );
};

export default TopNav;