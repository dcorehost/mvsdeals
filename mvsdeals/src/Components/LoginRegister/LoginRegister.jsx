import React, { useState } from 'react';
import styles from './LoginRegister.module.css';

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'login' ? styles.active : ''}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'register' ? styles.active : ''}`}
          onClick={() => setActiveTab('register')}
        >
          Register
        </button>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>My account</h2>

        {activeTab === 'login' ? (
          <div className={styles.loginForm}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="username">Username or email address *</label>
                <input type="text" id="username" className={styles.inputField} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password *</label>
                <input type="password" id="password" className={styles.inputField} required />
              </div>

              <div className={styles.rememberMe}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>

              <button type="submit" className={styles.submitButton}>Log in</button>

              <div className={styles.lostPassword}>
                <a href="#">Lost your password?</a>
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.registerForm}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email address *</label>
                <input type="email" id="email" className={styles.inputField} required />
              </div>

              <div className={styles.notice}>
                <p>A link to set a new password will be sent to your email address.</p>
              </div>

              <div className={styles.privacyPolicy}>
                <p>
                  Your personal data will be used to support your experience throughout this website, 
                  to manage access to your account, and for other purposes described in our privacy policy.
                </p>
              </div>

              <button type="submit" className={styles.submitButton}>Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;