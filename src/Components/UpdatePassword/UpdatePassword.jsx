import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "../UpdatePassword/UpdatePassword.module.css";

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [successMessage, setSuccessMessage] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // 🔍 Extract email/token from URL query parameters
  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const emailParam = params.get('email');
  const tokenParam = params.get('token');
  
  console.log("Extracted email:", emailParam);
  console.log("Extracted token:", tokenParam);
  
  if (!emailParam || !tokenParam) {
    setErrors({ submit: 'Invalid or expired link.' });
    return;
  }
  
  setEmail(emailParam);
  setToken(tokenParam);
}, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  if (!email || !token) {
    setErrors({ submit: 'Missing email or token.' });
    return;
  }

  setIsSubmitting(true);
  setErrors({});
  setSuccessMessage('');

  try {
    const formPayload = new FormData();
    formPayload.append('new_password', formData.newPassword);
    formPayload.append('confirm_password', formData.confirmPassword);

    console.log("New Password: ", formData.newPassword);
    console.log("Confirm Password: ", formData.confirmPassword);

    // ✅ Only ONE fetch call, with query parameters in URL
    const response = await fetch(`https://mvsdeals.online/updatePassword.php?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`, {
      method: 'POST',
      body: formPayload
    });

    console.log("Response Status:", response.status);
    const result = await response.json();
    console.log("Response Body:", result);

    // const result = await response.json();
    if (!response.ok) {
      setErrors({ submit: result.error || 'Something went wrong.' });
    } else {
      setSuccessMessage(result.success || 'Password updated.');
      setTimeout(() => navigate('/'), 2000); // Redirect after success
    }

  } catch (err) {
    setErrors({ submit: 'Server error. Please try again later.' });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className={styles['update-password-container']}>
      <div className={styles['update-password-card']}>
        <h2>Update Password</h2>

        {successMessage && (
          <div className={styles['success-message']}>{successMessage}</div>
        )}

        {errors.submit && (
          <div className={styles['error-message']}>{errors.submit}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className={errors.newPassword ? styles.error : ''}
            />
            {errors.newPassword && (
              <span className={styles['error-text']}>{errors.newPassword}</span>
            )}
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? styles.error : ''}
            />
            {errors.confirmPassword && (
              <span className={styles['error-text']}>{errors.confirmPassword}</span>
            )}
          </div>

          <button
            type="submit"
            className={styles['submit-btn']}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
