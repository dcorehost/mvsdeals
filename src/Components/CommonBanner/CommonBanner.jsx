
// import React from 'react';
// import styles from './CommonBanner.module.css';



// const CommonBanner = () => {
//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.naincontainer}>
//             <p className={styles.text}>
//                 Disclaimer: All products available on Avs Deals are directly supported by their respective brands. We strictly adhere to the FTC’s Mail, Internet, or Telephone Order Merchandise Rule to ensure consumer protection. Avs Deals is an independent e-commerce platform specializing in computer peripherals and software. All products listed on our website are legitimate licenses obtained from authorized partners of the respective brands. Avs Deals disclaims any association or affiliation with the products or subscriptions purchased through our site. Our merchandise may also be available on the brand owners’ websites. Please refer to our website for detailed Buying and Refund policies.
//             </p>
//         </div> 

       
       
//       </div>
//     </>

//   );
// };

// export default CommonBanner;

import React from 'react';
import styles from './CommonBanner.module.css';

const CommonBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.card}>
          <p className={styles.text}>
            <span className={styles.disclaimer}>Disclaimer:</span> All products available on Avs Deals are directly supported by their respective brands. We strictly adhere to the FTC’s Mail, Internet, or Telephone Order Merchandise Rule to ensure consumer protection. Avs Deals is an independent e-commerce platform specializing in computer peripherals and software. All products listed on our website are legitimate licenses obtained from authorized partners of the respective brands. Avs Deals disclaims any association or affiliation with the products or subscriptions purchased through our site. Our merchandise may also be available on the brand owners’ websites. Please refer to our website for detailed Buying and Refund policies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
