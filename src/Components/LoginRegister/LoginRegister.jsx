import React, { useState } from 'react';
import styles from './LoginRegister.module.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Correct import of ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import { useNavigate } from 'react-router-dom';

// Axios instance for API calls
const apiUrl = 'https://mvsdeals.online'; // Base URL of the API

const LoginRegister = () => {
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
const navigate = useNavigate();


  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/login.php`, {
        email: email,
        password: password,
      });

      if (response.data.success) {
        // Store token and other data in localStorage
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userEmail', response.data.email);
        toast.success(response.data.message); // Show success message

        setTimeout(() => {
    navigate('/');
  }, 1500);
      } else {
        toast.error(response.data.error); // Show error message
      }
    } catch (error) {
      toast.error('An error occurred during login. Please try again.');
    }
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/register.php`, {
        email: email,
      });

      if (response.data.success) {
        
        toast.success('Registration successful! Check your email for further instructions.');
        console.log('Temporary Password:', response.data.temporary_password);
          setActiveTab('login'); // ⬅ Switch to login tab

      } else {
        toast.error(response.data.error); // Show error message
      }
    } catch (error) {
if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error); // Error sent from backend
    } else {
      toast.error('An unexpected error occurred.'); // General error
        }    
      }
  };

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
            <form onSubmit={handleLogin}>
              <div className={styles.formGroup}>
                <label htmlFor="username">Username or email address *</label>
                <input
                  type="text"
                  id="username"
                  className={styles.inputField}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  id="password"
                  className={styles.inputField}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
            <form onSubmit={handleRegister}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email address *</label>
                <input
                  type="email"
                  id="email"
                  className={styles.inputField}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
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

      {/* Correct usage of ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default LoginRegister;
