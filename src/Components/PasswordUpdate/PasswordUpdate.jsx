import React, { useState } from 'react';
import styles from './PasswordUpdate.module.css';

const PasswordUpdate = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess('');
    } else if (newPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Password updated successfully!');
      // Here you'd typically send the updated password to the server.
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Update Password</h2>

        <label className={styles.label}>New Password</label>
        <input
          type="password"
          className={styles.input}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <label className={styles.label}>Confirm Password</label>
        <input
          type="password"
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}

        <button type="submit" className={styles.button}>Update</button>
      </form>
    </div>
  );
};

export default PasswordUpdate;
