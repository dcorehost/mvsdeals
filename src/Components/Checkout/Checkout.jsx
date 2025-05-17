// // import React from "react";
// // import styles from "./Checkout.module.css";

// // const Checkout = () => {
// //   return (
// //     <div className={styles.checkoutContainer}>
// //       <h2>Checkout</h2>
// //       <div className={styles.checkoutContent}>
// //         <form className={styles.billingForm}>
// //           <h3>Billing details</h3>
// //           <div className={styles.fieldGroup}>
// //             <div className={styles.field}><label>First name *</label><input type="text" required /></div>
// //             <div className={styles.field}><label>Last name *</label><input type="text" required /></div>
// //           </div>
// //           <div className={styles.field}><label>Company name (optional)</label><input type="text" /></div>
// //           <div className={styles.field}><label>Country / Region *</label><select><option>United States (US)</option></select></div>
// //           <div className={styles.field}><label>Street address *</label><input type="text" required /></div>
// //           <div className={styles.field}><input type="text" placeholder="Apartment, suite, unit, etc. (optional)" /></div>
// //           <div className={styles.field}><label>Town / City *</label><input type="text" required /></div>
// //           <div className={styles.field}><label>State *</label><select><option>California</option></select></div>
// //           <div className={styles.field}><label>ZIP Code *</label><input type="text" required /></div>
// //           <div className={styles.field}><label>Phone *</label><input type="tel" required /></div>
// //           <div className={styles.field}><label>Email address *</label><input type="email" required /></div>
// //           <div className={styles.field}><input type="checkbox" /> Create an account?</div>
// //           <div className={styles.field}><label>Order notes (optional)</label><textarea placeholder="Notes about your order, e.g. special notes for delivery." /></div>
// //         </form>

// //         <div className={styles.orderSummary}>
// //           <h3>Your order</h3>
// //           <div className={styles.orderItem}><span>McAfee Antivirus Plus 1 Year 1 User × 2</span><span>$118.00</span></div>
// //           <div className={styles.orderItem}><span>Norton 360 Deluxe (5 Devices) × 1</span><span>$29.99</span></div>
// //           <div className={styles.orderTotal}><span>Total</span><span>$147.99</span></div>

// //           <div className={styles.paymentSection}>
// //             <h4>Credit card</h4>
// //             <p>TEST MODE ENABLED<br />Use card number 4111111111111111 with any CVC and valid date.</p>
// //             <div className={styles.field}><label>Card number</label><input type="text" placeholder="**** **** **** ****" /></div>
// //             <div className={styles.fieldGroup}>
// //               <div className={styles.field}><label>Expiry (MM/YY)</label><input type="text" placeholder="MM / YY" /></div>
// //               <div className={styles.field}><label>Card code</label><input type="text" placeholder="CVC" /></div>
// //             </div>
// //             <p className={styles.privacyNote}>Your personal data will be used to process your order...</p>
// //             <button className={styles.placeOrderBtn}>Place order</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;

// import React from "react";
// import styles from "./Checkout.module.css";

// const Checkout = () => {
//   return (
//     <div className={styles.checkoutContainer}>
//       <h2>Checkout</h2>
//       <div className={styles.checkoutContent}>
//         <div className={styles.leftColumn}>
//           <form className={styles.billingForm}>
//             <h3>Billing details</h3>
//             <div className={styles.fieldGroup}>
//               <div className={styles.field}><label>First name *</label><input type="text" required /></div>
//               <div className={styles.field}><label>Last name *</label><input type="text" required /></div>
//             </div>
//             <div className={styles.field}><label>Company name (optional)</label><input type="text" /></div>
//             <div className={styles.field}><label>Country / Region *</label><select><option>United States (US)</option></select></div>
//             <div className={styles.field}><label>Street address *</label><input type="text" required /></div>
//             <div className={styles.field}><input type="text" placeholder="Apartment, suite, unit, etc. (optional)" /></div>
//             <div className={styles.field}><label>Town / City *</label><input type="text" required /></div>
//             <div className={styles.field}><label>State *</label><select><option>California</option></select></div>
//             <div className={styles.field}><label>ZIP Code *</label><input type="text" required /></div>
//             <div className={styles.field}><label>Phone *</label><input type="tel" required /></div>
//             <div className={styles.field}><label>Email address *</label><input type="email" required /></div>
//             <div className={styles.field}><input type="checkbox" /> Create an account?</div>
//             <div className={styles.field}><label>Order notes (optional)</label><textarea placeholder="Notes about your order, e.g. special notes for delivery." /></div>
//           </form>
//         </div>

//         <div className={styles.rightColumn}>
//           <div className={styles.orderSummary}>
//             <h3>Your order</h3>
//             <div className={styles.orderItem}><span>McAfee Antivirus Plus 1 Year 1 User × 2</span><span>$118.00</span></div>
//             <div className={styles.orderItem}><span>Norton 360 Deluxe (5 Devices) × 1</span><span>$29.99</span></div>
//             <div className={styles.orderTotal}><span>Total</span><span>$147.99</span></div>

//             <div className={styles.paymentSection}>
//               <h4>Credit card</h4>
//               <p>TEST MODE ENABLED<br />Use card number 4111111111111111 with any CVC and valid date.</p>
//               <div className={styles.field}><label>Card number</label><input type="text" placeholder="**** **** **** ****" /></div>
//               <div className={styles.fieldGroup}>
//                 <div className={styles.field}><label>Expiry (MM/YY)</label><input type="text" placeholder="MM / YY" /></div>
//                 <div className={styles.field}><label>Card code</label><input type="text" placeholder="CVC" /></div>
//               </div>
//               <p className={styles.privacyNote}>Your personal data will be used to process your order...</p>
//               <button className={styles.placeOrderBtn}>Place order</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React from "react";
// import styles from "./Checkout.module.css";
// import { FaCreditCard } from "react-icons/fa";
// import { MdOutlineShoppingCart } from "react-icons/md";

// const Checkout = () => {
//   return (
//     <div className={styles.checkoutContainer}>
//       <h2 className={styles.pageTitle}><MdOutlineShoppingCart /> Checkout</h2>
//       <div className={styles.checkoutContent}>
//         <div className={styles.leftColumn}>
//           <form className={styles.billingForm}>
//             <h3 className={styles.sectionTitle}>Billing Details</h3>
//             <div className={styles.fieldGroup}>
//               <div className={styles.field}><label>First name *</label><input type="text" required /></div>
//               <div className={styles.field}><label>Last name *</label><input type="text" required /></div>
//             </div>
//             <div className={styles.field}><label>Company name (optional)</label><input type="text" /></div>
//             <div className={styles.field}><label>Country / Region *</label><select><option>United States (US)</option></select></div>
//             <div className={styles.field}><label>Street address *</label><input type="text" required /></div>
//             <div className={styles.field}><input type="text" placeholder="Apartment, suite, unit, etc. (optional)" /></div>
//             <div className={styles.field}><label>Town / City *</label><input type="text" required /></div>
//             <div className={styles.field}><label>State *</label><select><option>California</option></select></div>
//             <div className={styles.field}><label>ZIP Code *</label><input type="text" required /></div>
//             <div className={styles.field}><label>Phone *</label><input type="tel" required /></div>
//             <div className={styles.field}><label>Email address *</label><input type="email" required /></div>
//             <div className={styles.fieldCheckbox}><input type="checkbox" /> <span>Create an account?</span></div>
//             <div className={styles.field}><label>Order notes (optional)</label><textarea placeholder="Notes about your order, e.g. special notes for delivery." /></div>
//           </form>
//         </div>

//         <div className={styles.rightColumn}>
//           <div className={styles.orderSummary}>
//             <h3 className={styles.sectionTitle}>Your Order</h3>
//             <div className={styles.orderItem}><span>McAfee Antivirus Plus 1 Year 1 User × 2</span><span>$118.00</span></div>
//             <div className={styles.orderItem}><span>Norton 360 Deluxe (5 Devices) × 1</span><span>$29.99</span></div>
//             <div className={styles.orderTotal}><span>Total</span><span>$147.99</span></div>

//             <div className={styles.paymentSection}>
//               <h4><FaCreditCard /> Credit Card</h4>
//               <p className={styles.testModeNote}>TEST MODE ENABLED<br />Use card number 4111111111111111 with any CVC and valid date.</p>
//               <div className={styles.field}><label>Card number</label><input type="text" placeholder="**** **** **** ****" /></div>
//               <div className={styles.fieldGroup}>
//                 <div className={styles.field}><label>Expiry (MM/YY)</label><input type="text" placeholder="MM / YY" /></div>
//                 <div className={styles.field}><label>Card code</label><input type="text" placeholder="CVC" /></div>
//               </div>
//               <p className={styles.privacyNote}>Your personal data will be used to process your order and enhance your experience.</p>
//               <button className={styles.placeOrderBtn}>Place Order</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React from "react";
import styles from "./Checkout.module.css";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Checkout = () => {
  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.pageTitle}><MdOutlineShoppingCart /> Checkout</h2>
      <div className={styles.checkoutContent}>
        <div className={styles.leftColumn}>
          <form className={styles.billingForm}>
            <h3 className={styles.sectionTitle}>Billing Details</h3>
            <div className={styles.fieldGroup}>
              <div className={styles.field}><label>First name *</label><input type="text" required /></div>
              <div className={styles.field}><label>Last name *</label><input type="text" required /></div>
            </div>
            <div className={styles.field}><label>Company name (optional)</label><input type="text" /></div>
            <div className={styles.field}><label>Country / Region *</label><select><option>United States (US)</option></select></div>
            <div className={styles.field}><label>Street address *</label><input type="text" required /></div>
            <div className={styles.field}><input type="text" placeholder="Apartment, suite, unit, etc. (optional)" /></div>
            <div className={styles.field}><label>Town / City *</label><input type="text" required /></div>
            <div className={styles.field}><label>State *</label><select><option>California</option></select></div>
            <div className={styles.field}><label>ZIP Code *</label><input type="text" required /></div>
            <div className={styles.field}><label>Phone *</label><input type="tel" required /></div>
            <div className={styles.field}><label>Email address *</label><input type="email" required /></div>
            <div className={styles.fieldCheckbox}><input type="checkbox" /> <span>Create an account?</span></div>
            <div className={styles.field}><label>Order notes (optional)</label><textarea placeholder="Notes about your order, e.g. special notes for delivery." /></div>
          </form>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.orderSummary}>
            <h3 className={styles.sectionTitle}>Your Order</h3>
            <div className={styles.orderItem}><span>McAfee Antivirus Plus 1 Year 1 User × 2</span><span>$118.00</span></div>
            <div className={styles.orderItem}><span>Norton 360 Deluxe (5 Devices) × 1</span><span>$29.99</span></div>
            <div className={styles.orderTotal}><span>Total</span><span>$147.99</span></div>

            <div className={styles.paymentSection}>
              <h4><FaCreditCard /> Credit Card</h4>
              <p className={styles.testModeNote}>TEST MODE ENABLED<br />Use card number 4111111111111111 with any CVC and valid date.</p>
              <div className={styles.field}><label>Card number</label><input type="text" placeholder="**** **** **** ****" /></div>
              <div className={styles.fieldGroup}>
                <div className={styles.field}><label>Expiry (MM/YY)</label><input type="text" placeholder="MM / YY" /></div>
                <div className={styles.field}><label>Card code</label><input type="text" placeholder="CVC" /></div>
              </div>
              <p className={styles.privacyNote}>Your personal data will be used to process your order and enhance your experience.</p>
              <button className={styles.placeOrderBtn}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;