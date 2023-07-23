import React, { useState } from 'react';
import './ResetPassword.css';
import SuccessPopup from './SuccessPopup';
import edflingLogo from './assets/edfling-logo.png'; // Replace with the actual image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleSetPassword = () => {
    // Check if both password fields are not empty
    if (password && confirmPassword && password === confirmPassword) {
      setShowSuccessPopup(true);
      setShowLoginOptions(true); // Show login options when SuccessPopup appears
    } else {
      // Show an error message or handle the restriction as needed
      alert('Please enter a valid password and confirm it.');
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setShowLoginOptions(false); // Hide login options when SuccessPopup is closed
  };

  return (
    <div className='container'>
    <div className="password-container">
      <div className="left-column">
        <img
          src={edflingLogo}
          alt="Edfling Logo"
          className="left-image"
        />
      </div>

      <div className="right-column">
        <div className="join-edfling">
          <h2>Join Edfling As a</h2>
          <div className="role-buttons">
            <button className="role-button">User</button>
            <button className="role-button">Instructor</button>
            <button className="role-button">TA</button>
          </div>
        </div>
        <div className="password-field">
          <h3>Reset Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" New password"
            className="password-input"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=" Confirm Password"
            className="password-input"
          />
          <button onClick={handleSetPassword} className="password-button">
            Reset
          </button>
          {showSuccessPopup && (
            <div className="login-options">
              <p>----------------- Or -----------------</p>
              <br />
              <a href="https://www.google.com" target="_blank" className="login-option google">
              <FontAwesomeIcon icon={faGoogle} className="login-icon" />
                 Continue with Google
              </a>
              <br />
              <a href="https://www.facebook.com" target="_blank" className="login-option facebook">
              <FontAwesomeIcon icon={faFacebook} className="login-icon" />
                 Continue with Facebook
              </a>
              <br />
              <a href="https://www.apple.com" target="_blank" className="login-option apple">
              <FontAwesomeIcon icon={faApple} className="login-icon" />
                  Continue with Apple
              </a>
            </div>
          )}
        </div>
      </div>
      {showSuccessPopup && <SuccessPopup onBackToLoginClick={handleClosePopup} />}
    </div>
    </div>
  );
};

export default NewPassword;
