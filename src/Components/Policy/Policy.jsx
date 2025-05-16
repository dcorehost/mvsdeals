import React from "react";
import styles from "./Policy.module.css";

const Policy = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.mainHeading}>Privacy Policy</h1>

      <h6 className={styles.heading}>
        <span>1</span> Information Collection and Use
      </h6>

      <h6 className={styles.heading}>
        <span>1.1</span> Information You Provide
      </h6>

      <p className={styles.paragraph}>
        When you use our website or make a purchase, we may ask for personally identifiable information that can be used to contact or identify you. This information may include, but is not limited to:
      </p>

      <ul className={styles.list}>
        <li className={styles.listitem}>Name</li>
        <li className={styles.listitem}>Email address</li>
        <li className={styles.listitem}>Phone number</li>
        <li className={styles.listitem}>Shipping and billing addresses</li>
        <li className={styles.listitem}>Payment information</li>
      </ul>

        <h6 className={styles.heading}>
        <span>1.2</span> Log Data
      </h6>
       <p className={styles.paragraph}>
         Like many websites, we collect information that your browser sends whenever you visit our site (“Log Data”). This Log Data may include:
      </p>
      <ul className={styles.list}>
        <li className={styles.listitem}>Your computer’s IP address</li>
        <li className={styles.listitem}>Browser type and version</li>
        <li className={styles.listitem}>Pages visited on our website</li>
        <li className={styles.listitem}>Date and time of your visit</li>
        <li className={styles.listitem}>Time spent on pages</li>
        <li className={styles.listitem}>Other diagnostic data for site performance</li>
      </ul>

       <h6 className={styles.heading}>
          <span>1.3</span> Cookies
      </h6>
        <p className={styles.paragraph}>
             Cookies are small data files stored on your device that may include an anonymous unique identifier. We use cookies to enhance your browsing experience and collect information on how you interact with our website. You can set your browser to refuse cookies or alert you when cookies are being sent. However, disabling cookies may limit your ability to use certain features of our site. 
         </p>


         <h6 className={styles.heading}>
        <span>2</span> Use of Information
      </h6>
       <p className={styles.paragraph}>
          The information we collect may be used for various purposes, including but not limited to:
      </p>
      <ul className={styles.list}>
        <li className={styles.listitem}>Providing and maintaining our website and services</li>
        <li className={styles.listitem}>Processing orders and transactions</li>
        <li className={styles.listitem}>Notifying you of changes to our site or services</li>
        <li className={styles.listitem}>Providing customer support and responding to inquiries</li>
        <li className={styles.listitem}>Personalizing your experience on the site</li>
        <li className={styles.listitem}>Sending promotional emails, offers, and product updates</li>
      </ul>
       <h6 className={styles.heading}>
        <span>3</span> Data Security
      </h6>
       <p className={styles.paragraph}>
         We take reasonable measures to protect your personal information. However, please note that no method of online transmission or electronic storage is 100% secure. While we strive to use commercially acceptable methods to safeguard your data, we cannot guarantee absolute security.
      </p>
       <h6 className={styles.heading}>
        <span>4</span> Sharing of Information
      </h6>
       <p className={styles.paragraph}>
          We do not sell, trade, or transfer your personal information to outside parties. However, we may share your information with trusted third-party service providers to help us operate our website, process payments, or deliver orders. These third parties are required to keep your information confidential and use it only for the specified purposes.
      </p>
       <h6 className={styles.heading}>
        <span>5</span> Changes to This Privacy Policy
      </h6>
       <p className={styles.paragraph}>
          We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and the updated policy will apply to all information collected going forward. We encourage you to review this policy periodically to stay informed about how we protect your data.
      </p>
       <h6 className={styles.heading}>
        <span>6</span> Contact Information
      </h6>
       <p className={styles.paragraph}>
          If you have any questions or concerns about this Privacy Policy, please reach out to us:

      </p>
      <h6 className={styles.heading}>
         avdeals.online
      </h6>
      <h6 className={styles.heading}>
         email: 
      </h6>
      <p className={styles.paragraph}>
        info@avsdeals.online

      </p>
       <h6 className={styles.heading}>
         Website: 
      </h6>
      <p className={styles.paragraph}>
        www.avdeals.online

      </p>




    </div>
  );
};

export default Policy;
