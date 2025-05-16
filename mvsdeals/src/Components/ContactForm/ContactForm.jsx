import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <h1 className={styles.contactTitle}>Contact And Get In Reach Us !</h1>
        
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              className={styles.formInput}
            />
          </div>
          
          <div className={styles.formGroup}>
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email *" 
              className={styles.formInput}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <input 
              type="text" 
              id="subject" 
              placeholder="Subject" 
              className={styles.formInput}
            />
          </div>
          
          <div className={styles.formGroup}>
            <textarea 
              id="message" 
              placeholder="Your Message *" 
              className={styles.formTextarea}
              required
            ></textarea>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;