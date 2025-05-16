// import React from 'react';
// import styles from './HomeShop.module.css';

// const HomeShop = () => {
//   const products = [
//     { id: 1, name: 'McAfee Antivirus', price: '$19.00', image: 'https://example.com/mcafee-antivirus.jpg' },
//     { id: 2, name: 'McAfee Antivirus 10-User 1Yr', price: '$44.99', image: 'https://example.com/mcafee-antivirus-10-user.jpg' },
//     { id: 3, name: 'McAfee Antivirus Plus 1 Year 1 User', price: '$59.00', image: 'https://example.com/mcafee-antivirus-plus.jpg' },
//     { id: 4, name: 'McAfee Antivirus Plus 10-Devices–Unlimited / 1-Year', price: '$29.99', image: 'https://example.com/mcafee-antivirus-plus-10-devices.jpg' },
//     { id: 5, name: 'McAfee Antivirus', price: '$19.00', image: 'https://example.com/mcafee-antivirus.jpg' },
//     { id: 6, name: 'McAfee Antivirus 10-User 1Yr', price: '$44.99', image: 'https://example.com/mcafee-antivirus-10-user.jpg' },
//     { id: 7, name: 'McAfee Antivirus Plus 1 Year 1 User', price: '$59.00', image: 'https://example.com/mcafee-antivirus-plus.jpg' },
//     { id: 8, name: 'McAfee Antivirus Plus 10-Devices–Unlimited / 1-Year', price: '$29.99', image: 'https://example.com/mcafee-antivirus-plus-10-devices.jpg' },
//     { id: 9, name: 'McAfee Antivirus', price: '$19.00', image: 'https://example.com/mcafee-antivirus.jpg' },
//     { id: 10, name: 'McAfee Antivirus 10-User 1Yr', price: '$44.99', image: 'https://example.com/mcafee-antivirus-10-user.jpg' },
//     { id: 11, name: 'McAfee Antivirus Plus 1 Year 1 User', price: '$59.00', image: 'https://example.com/mcafee-antivirus-plus.jpg' },
//     { id: 12, name: 'McAfee Antivirus Plus 10-Devices–Unlimited / 1-Year', price: '$29.99', image: 'https://example.com/mcafee-antivirus-plus-10-devices.jpg' },
//     { id: 13, name: 'McAfee Antivirus', price: '$19.00', image: 'https://example.com/mcafee-antivirus.jpg' },
//     { id: 14, name: 'McAfee Antivirus 10-User 1Yr', price: '$44.99', image: 'https://example.com/mcafee-antivirus-10-user.jpg' },
//     { id: 15, name: 'McAfee Antivirus Plus 1 Year 1 User', price: '$59.00', image: 'https://example.com/mcafee-antivirus-plus.jpg' },
//     { id: 16, name: 'McAfee Antivirus Plus 10-Devices–Unlimited / 1-Year', price: '$29.99', image: 'https://example.com/mcafee-antivirus-plus-10-devices.jpg' },
//   ];

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Online Order</h2>
//       <p className={styles.subtitle}>Shop at your comfort</p>
//       <div className={styles.productGrid}>
//         {products.map((product) => (
//           <div key={product.id} className={styles.productCard}>
//             <img src={product.image} alt={product.name} className={styles.productImage} />
//             <h3 className={styles.productName}>{product.name}</h3>
//             <p className={styles.productPrice}>{product.price}</p>
//             <button className={styles.addToCartButton}>Add to cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeShop;
import React from "react";
import styles from "./HomeShop.module.css";
import { assets } from "../../assets/assets";

const HomeShop = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Online Order</h2>
      <p className={styles.subtitle}>Shop at your comfort</p>
      <div className={styles.productGrid}>
        {assets.products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>{product.price}</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeShop;
