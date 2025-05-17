import React from 'react';
import styles from './Cart.module.css';

const Cart = () => {
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
            <tr>
              <td>McAfee Antivirus Plus 1 Year 1 User</td>
              <td>$59.00</td>
              <td>1</td>
              <td>$59.00</td>
            </tr>
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
          <span className={styles.totalsValue}>$59.00</span>
        </div>
        
        <div className={styles.totalsRow}>
          <span className={styles.totalsLabel}>Total</span>
          <span className={styles.totalsValue}>$59.00</span>
        </div>
        
        <button className={styles.checkoutButton}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;