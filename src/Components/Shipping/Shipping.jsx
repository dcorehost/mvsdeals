

import React from "react";
import styles from "./Shipping.module.css";

const Shipping = () => {
  return (
    <div className={styles.Container}>
      <h6 className={styles.heading}>
        <span>1.1</span> Information You Provide
      </h6>

      <p className={styles.paragraph}>
        <span>1.</span> At <span className={styles.brand}>Avs Deals</span>, we strive to deliver a seamless and efficient experience for our customers. Below is our shipping policy for all software products purchased from our website.
      </p>

      <h6 className={styles.heading}>Delivery Process</h6>

      <p className={styles.paragraph}>
        <span>1. Digital Products:</span>
      </p>

      <ul className={styles.list}>
        <li className={styles.listitem}>
          All software purchases are delivered electronically. After your payment is successfully processed, you will receive an email with the download link and license key (if applicable) within <span>15 minutes to 24 hours.</span>
        </li>
        <li className={styles.listitem}>
          Please ensure that you provide a valid email address during checkout to avoid any delivery delays.
        </li>
      </ul>

      <p className={styles.paragraph}>
        <span>2. Physical Media (if applicable):</span>
      </p>

      <ul className={styles.list}>
        <li className={styles.listitem}>
           For software that requires physical media (e.g., USB drives or DVDs), shipping will be carried out through standard courier services. Delivery times may vary based on your location:        </li>
        <li className={styles.listitem}>
         Domestic Shipping: <span>  3-7 business days</span>
        </li>
        <li className={styles.listitem}>
         International Shipping:  <span>  7-21 business days</span>
        </li>
      </ul>

        <h6 className={styles.heading}>Shipping Fees</h6>
        <ul className={styles.list}>
        <li className={styles.listitem}>
        <span> Digital Products: </span> No shipping fees apply to digital products.
        </li>
        <li className={styles.listitem}>
        <span> Physical Media   </span>Shipping fees depend on your location and will be calculated at checkout.
        </li>
      </ul>
              <h6 className={styles.heading}>Order Tracking</h6>
                  <p className={styles.paragraph}>
                       For physical products, once your order is shipped, a tracking number will be provided via email to help you monitor its progress.
                  </p>
      <h6 className={styles.heading}>Delivery Issues</h6>
       <ul className={styles.list}>
        <li className={styles.listitem}>
            If you do not receive your digital product within the promised timeframe, please check your spam/junk email folder or contact us immediately at<span> support@avsdeals.online.</span>
        </li>
        <li className={styles.listitem}>
            For physical shipments, please allow up to <span>48 hours</span> for tracking information to update. If your package does not arrive within the estimated delivery period, reach out to us for assistance.
        </li>
        </ul>
     <h6 className={styles.heading}>Refunds & Returns</h6>
          <ul className={styles.list}>        
              <li className={styles.listitem}>
                  Please review our <span>Refund Policy </span> for more details on cancellations or refund requests for both digital and physical products.
             </li>
            </ul>

                 <h6 className={styles.heading}>Support</h6>
                 <p className={styles.paragraph}>
                    For any questions or concerns regarding shipping, feel free to contact us at <span>support@avsdeals.online.</span>We’re here to help!

                    </p>


    </div>
  );
};

export default Shipping;
