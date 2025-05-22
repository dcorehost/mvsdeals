import React from "react";
import styles from "./Terms.module.css";

const Terms = () => {
  return (
    <div className={styles.Container}>
      

      <h6 className={styles.heading}>Eligibility</h6>
<p className={styles.paragraph}>
  By using{' '}
  <a href="https://mvsdeals.online" target="_blank" rel="noopener noreferrer">
    mvsdeals.online
  </a>
  , you affirm that you are at least 18 years old or have the consent of a parent or guardian. Accessing the site
  constitutes acceptance of these Terms and our Privacy Policy.
</p>

      



      <h6 className={styles.heading}>2. Changes to Terms</h6>
         <p className={styles.paragraph}>
            We reserve the right to update or modify these Terms at any time without prior notice. Any changes will take effect immediately upon posting. Your continued use of the website indicates acceptance of the updated terms.

        </p>
       <h6 className={styles.heading}>3. Products & Accuracy of Information</h6>
      {/* <p className={styles.paragraph}>We strive to present our products and services accurately. However, errors may occur, such as incorrect product descriptions or pricing. <span>mvsdeals.online </span> reserves the right to correct such errors and modify product information without prior notice.

        
       
      </p> */}
      <p className={styles.paragraph}>
  We strive to present our products and services accurately. However, errors may occur, such as incorrect product
  descriptions or pricing.{' '}
  <a href="https://mvsdeals.online" target="_blank" rel="noopener noreferrer">
    mvsdeals.online
  </a>{' '}
  reserves the right to correct such errors and modify product information without prior notice.
</p>
       <h6 className={styles.heading}>4. Pricing & Payment</h6>
      <p className={styles.paragraph}>All prices are listed in ($). We accept multiple payment options, and you are responsible for ensuring the payment information is accurate. By placing an order, you authorize us to charge your selected payment method for the total amount, including any applicable taxes and shipping fees.
        
       
      </p>
       <h6 className={styles.heading}>5. Order Confirmation & Cancellation</h6>
      <p className={styles.paragraph}>
         Orders are subject to our acceptance and product availability. We reserve the right to cancel or refuse any order if we detect inaccuracies, product unavailability, or suspected fraud. If an order is canceled, you will be notified, and any payments made will be refunded promptly.        
       
      </p>
       <h6 className={styles.heading}>6. Shipping & Delivery</h6>
      <p className={styles.paragraph}>
          Shipping policies, including delivery times and costs, are outlined in our Shipping Policy. By placing an order, you agree to the shipping terms. Delivery dates are estimates, and we are not responsible for delays beyond our control.        
       
      </p>
       <h6 className={styles.heading}>7. Returns, Exchanges & Refunds</h6>
      <p className={styles.paragraph}>
           Our Return and Refund Policy governs the terms for returns or exchanges. Please refer to this policy for details on eligibility and the process for refunds.
        
       
      </p>
      <h6 className={styles.heading}>8. User Conduct</h6>
      <p className={styles.paragraph}>
         When using our website, you agree to refrain from:

      </p>
      <p className={styles.paragraph}>
        <ul> 
           <li className={styles.listitem}>Submitting false or misleading information</li>
           <li className={styles.listitem}>Interfering with the website’s functionality</li>
           <li className={styles.listitem}>Engaging in fraudulent activities</li>            
        </ul>      

      </p>
       <p className={styles.paragraph}>
          We reserve the right to terminate access to users violating these rules.
      </p>

      
      
     

       <h6 className={styles.heading}>9. Intellectual Property Rights</h6>
      {/* <p className={styles.paragraph}>
          All content on <span> mvsdeals.online</span> including but not limited to text, images, logos, and graphics, is our property or licensed to us and protected by intellectual property laws. Any unauthorized use, reproduction, or distribution is strictly prohibited.
      </p> */}
      <p className={styles.paragraph}>
  All content on{' '}
  <a href="https://mvsdeals.online" target="_blank" rel="noopener noreferrer">
    mvsdeals.online
  </a>, including but not limited to text, images, logos, and graphics, is our property or licensed to us and protected
  by intellectual property laws. Any unauthorized use, reproduction, or distribution is strictly prohibited.
</p>

       <h6 className={styles.heading}>10. Limitation of Liability</h6>
      <p className={styles.paragraph}>
        We are not responsible for any direct, indirect, or consequential damages arising from the use of this website or products purchased. Your sole remedy is to stop using the website or return the product according to our policies.

      </p>
       <h6 className={styles.heading}>11. Third-Party Links</h6>
      <p className={styles.paragraph}>
         This website may contain links to third-party sites. These links are provided for convenience, and we are not responsible for the content, policies, or practices of these external sites.
      </p>
       <h6 className={styles.heading}>12. Governing Law & Dispute Resolution</h6>
      <p className={styles.paragraph}>
         These Terms are governed by the laws of [insert jurisdiction]. Any disputes arising from these Terms or your use of the website shall be resolved exclusively in the courts of [insert jurisdiction].

      </p>
       <h6 className={styles.heading}>13. Contact Us</h6>

      <h6 className={styles.heading}>ShopNewMVS.online</h6>
      {/* <p className={styles.paragraph}>
        <span className={styles.label}>Email:</span> info@mvsdeals.online<br />
        <span className={styles.label}>Website:</span> mvsdeals.online
      </p> */}
      <p className={styles.paragraph}>
  <span className={styles.label}>Email:</span>{' '}
  <a href="mailto:info@mvsdeals.online">info@mvsdeals.online</a>
  <br />
  <span className={styles.label}>Website:</span>{' '}
  <a href="https://mvsdeals.online" target="_blank" rel="noopener noreferrer">
    mvsdeals.online
  </a>
</p>


    </div>
  );
};

export default Terms;
