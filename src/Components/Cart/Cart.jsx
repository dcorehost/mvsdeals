// import React from 'react';
// import styles from './Cart.module.css';

// const Cart = () => {
//   return (
//     <div className={styles.cartContainer}>
//       <h1 className={styles.cartTitle}>Cart</h1>
      
//       <div className={styles.cartTableContainer}>
//         <table className={styles.cartTable}>
//           <thead>
//             <tr>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Subtotal</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>McAfee Antivirus Plus 1 Year 1 User</td>
//               <td>$59.00</td>
//               <td>1</td>
//               <td>$59.00</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className={styles.couponSection}>
//         <h3 className={styles.couponTitle}>Coupon code</h3>
//         <button className={styles.couponButton}>Apply coupon</button>
//       </div>

//       <div className={styles.divider}></div>

//       <div className={styles.cartTotals}>
//         <h2 className={styles.totalsTitle}>Cart totals</h2>
        
//         <div className={styles.totalsRow}>
//           <span className={styles.totalsLabel}>Subtotal</span>
//           <span className={styles.totalsValue}>$59.00</span>
//         </div>
        
//         <div className={styles.totalsRow}>
//           <span className={styles.totalsLabel}>Total</span>
//           <span className={styles.totalsValue}>$59.00</span>
//         </div>
        
//         <button className={styles.checkoutButton}>Proceed to checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import Auth from '../Services/Auth'; // Adjust the path based on your folder structure

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userDetails = Auth.getUserDetails();
  const userId = userDetails?.user_id;

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) {
        setError('User not logged in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://mvsdeals.online/getCart.php?user_id=${userId}`);
        if (response.data.status === 'success') {
          setCartItems(response.data.cart);
        } else {
          setError('Failed to load cart data.');
        }
      } catch (err) {
        console.error('Axios error:', err);
        setError('Network error. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.subtotal), 0).toFixed(2);
  };

  if (loading) return <div className={styles.cartContainer}>Loading cart...</div>;
  if (error) return <div className={styles.cartContainer}>Error: {error}</div>;

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Cart</h1>

      <div className={styles.cartTableContainer}>
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${parseFloat(item.price).toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${parseFloat(item.subtotal).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.couponSection}>
        <h3 className={styles.couponTitle}>Coupon code</h3>
        <button className={styles.couponButton}>Apply coupon</button>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.cartTotals}>
        <h2 className={styles.totalsTitle}>Cart totals</h2>

        <div className={styles.totalsRow}>
          <span className={styles.totalsLabel}>Subtotal</span>
          <span className={styles.totalsValue}>${getTotal()}</span>
        </div>

        <div className={styles.totalsRow}>
          <span className={styles.totalsLabel}>Total</span>
          <span className={styles.totalsValue}>${getTotal()}</span>
        </div>

        <button className={styles.checkoutButton}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
