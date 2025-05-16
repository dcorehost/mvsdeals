import React from "react";
import styles from "./Refund.module.css";

const Refund = () => {
  return (
    <div className={styles.Container}>
      <p className={styles.paragraph}>
        At <span className={styles.brand}>Avs Deals</span>, we aim to deliver the best products and services. If you are not satisfied with your purchase, we offer a hassle-free return and refund process. Please read the following carefully to understand how it works.
      </p>

      <h6 className={styles.heading}>1. Conditions for Return</h6>
      <p className={styles.paragraph}>
        You can return products within 30 days of receiving your order, provided the item is in unused condition with no signs of wear or damage. The original packaging and all labels must be intact, and a receipt or proof of purchase is required for processing the return.
      </p>

      



      <h6 className={styles.heading}>2. Items Not Eligible for Return</h6>
         <p className={styles.paragraph}>
           Certain products are not eligible for return, such as digital products or software once the license has been activated. Opened antivirus or software that has been registered is non-returnable, as well as gift cards, promotional items, and clearance products.      
        </p>
       <h6 className={styles.heading}>3. How to Initiate a Return</h6>
      <p className={styles.paragraph}>To initiate a return, please contact our support team at info@avsdeals.online with your order number and reason for the return. Once your return request is approved, we will provide a return authorization with instructions. The product must be securely packaged and shipped to the address provided in the authorization.
        
       
      </p>
       <h6 className={styles.heading}>4. Refund Processing</h6>
      <p className={styles.paragraph}>After we receive the returned product and confirm it meets the return conditions, we will notify you of the approval or rejection of your refund. Approved refunds will be processed within 7-10 business days and credited to your original payment method. Processing times may vary based on your bank or payment provider.
        
       
      </p>
       <h6 className={styles.heading}>5. Shipping Costs</h6>
      <p className={styles.paragraph}>Return shipping costs are the responsibility of the customer, except in cases where the product was damaged or defective upon delivery. Original shipping fees are non-refundable, and the cost of return shipping will be deducted from your refund, if applicable.
        
       
      </p>
       <h6 className={styles.heading}>6. Exchanges</h6>
      <p className={styles.paragraph}>For exchanges, please reach out to us at <span>info@avsdeals.online.</span> If the product is eligible, we will guide you through the exchange process. Exchanges will only be processed once the original product is returned and inspected.
        
       
      </p>
       <h6 className={styles.heading}>7. Damaged or Incorrect Items</h6>
      <p className={styles.paragraph}>If you receive a damaged, defective, or incorrect product, notify us within 48 hours of receiving the order. We will arrange for a replacement or a full refund without additional charges.

        
       
      </p>
      
      <h6 className={styles.heading}>8. Contact Us</h6>
      <p className={styles.paragraph}>
        If you have further questions about our return or refund policy, please contact us:
      </p>

      <h6 className={styles.heading}>ShopNewAVS.online</h6>
      <p className={styles.paragraph}>
        <span className={styles.label}>Email:</span> info@avsdeals.online<br />
        <span className={styles.label}>Website:</span> avsdeals.online
      </p>

    </div>
  );
};

export default Refund;
