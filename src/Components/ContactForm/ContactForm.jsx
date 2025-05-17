import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactForm.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('https://mvsdeals.online/contactus.php', {
        name,
        email,
        subject,
        message
      });

      if (response.data.message) {
        toast.success(response.data.message);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        toast.error('Unexpected response from server.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <h1 className={styles.contactTitle}>Contact And Get In Reach Us !</h1>
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={styles.formInput}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              className={styles.formInput}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={styles.formInput}
            />
          </div>
          
          <div className={styles.formGroup}>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              className={styles.formTextarea}
              required
            />
          </div>
          
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Sending...' : 'Submit Form'}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;
