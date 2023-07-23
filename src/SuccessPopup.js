import React from 'react';
import './SuccessPopup.css';
import successImage from './assets/Frame.png';

const SuccessPopup = ({ onBackToLoginClick }) => {
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="overlay" onClick={onBackToLoginClick}>
      <div className="success-popup-container" onClick={handlePopupClick}>
        <img src={successImage} alt="Success" className="success-image" />
        <p className="success-message">Password Reset Successfully!</p>
        <button className="back-to-login-button" onClick={onBackToLoginClick}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
