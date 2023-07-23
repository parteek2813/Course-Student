import React, { useContext, useState } from 'react';
import { PageContext } from './App';
import './ResetPassword.css';

import edflingLogo from './assets/edfling-logo.png'; // Replace with the actual image path

const ResetPassword = () => {
  const { setPage } = useContext(PageContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resetPasswordSelected, setResetPasswordSelected] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleResetPassword = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      setPage('verify-otp');
    } else {
      // Show an error message or handle the restriction as needed
      alert('Please enter your phone number.');
    }
  };

  const handleRoleButtonClick = (role) => {
    setSelectedRole(role);
  };

  const handleResetPasswordClick = () => {
    setResetPasswordSelected(true);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Remove any non-numeric characters from the input
    const numericPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    return numericPhoneNumber.length === 10;
  };

  return (
    <div className='container'>
    <div className="password-container">
      <div className="left-column">
        <img
          src={edflingLogo}
          alt="Edfling Logo"  className="left-image"
        />
      </div>

      <div className="right-column">
        <div className="join-edfling">
          <h2>Join Edfling As a</h2>
          <div className="role-buttons">
            <button
              className={selectedRole === 'User' ? 'role-button selected' : 'role-button'}
              onClick={() => handleRoleButtonClick('User')}
            >
              User
            </button>
            <button
              className={selectedRole === 'Instructor' ? 'role-button selected' : 'role-button'}
              onClick={() => handleRoleButtonClick('Instructor')}
            >
              Instructor
            </button>
            <button
              className={selectedRole === 'TA' ? 'role-button selected' : 'role-button'}
              onClick={() => handleRoleButtonClick('TA')}
            >
              TA
            </button>
          </div>
        </div>
        <div className="password-field">
          <h3>Reset Password</h3>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className={resetPasswordSelected ? 'password-input selected' : 'password-input'}
            pattern="[0-9]*" // Restrict input to only accept numbers
          />
          <button
            onClick={handleResetPassword}
            className={resetPasswordSelected ? 'password-button selected' : 'password-button'}
            onMouseEnter={handleResetPasswordClick}
            onMouseLeave={() => setResetPasswordSelected(false)}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;
