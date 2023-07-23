import React, { useContext,useState } from 'react';
import { PageContext } from './App';
import './VerifyOTP.css';
import edflingLogo from './assets/lock-icon.png';

const VerifyOTP = () => {
  const { setPage } = useContext(PageContext);
  const [otps, setOTPs] = useState(['', '', '', '']);
  const [userSelected, setUserSelected] = useState(false);
  const [instructorSelected, setInstructorSelected] = useState(false);
  const [taSelected, setTASelected] = useState(false);

  const handleRoleButtonClick = (role) => {
    if (role === 'User') {
      setUserSelected(true);
      setInstructorSelected(false);
      setTASelected(false);
    } else if (role === 'Instructor') {
      setUserSelected(false);
      setInstructorSelected(true);
      setTASelected(false);
    } else if (role === 'TA') {
      setUserSelected(false);
      setInstructorSelected(false);
      setTASelected(true);
    }
  };

  const handleVerifyOTP = () => {
    // Check if all OTP fields are filled
    if (otps.every((digit) => digit !== '')) {
      setPage('new-password'); // Use setPage to navigate to NewPassword page
    } else {
      alert('Please fill all OTP fields.');
    }
  };

  /* eslint-disable */
  const handleOTPChange = (index, value) => {
    setOTPs((prevOTPs) => {
      const newOTPs = [...prevOTPs];
      newOTPs[index] = value;
      return newOTPs;
    });
  };
  /* eslint-enable */

  const handleResendOTP = () => {
    // Handle resend OTP logic here
    alert('Resend OTP function will be implemented here.');
  };

  return (
    <div className='container'>
    <div className="verify-otp-container">
      <div className="left-column">
        <img src={edflingLogo} alt="Edfling Logo" className="left-image" />
      </div>
      <div className="right-column">
        <div className="join-edfling">
        <h2>Join Edfling As a</h2>
        <div className="role-buttons">
            <button
              className={userSelected ? 'role-button selected' : 'role-button'}
              onClick={() => handleRoleButtonClick('User')}
            >
              User
            </button>
            <button
              className={instructorSelected ? 'role-button selected' : 'role-button'}
              onClick={() => handleRoleButtonClick('Instructor')}
            >
              Instructor
            </button>
            <button
              className={taSelected ? 'role-button selected' : 'role-button'}
              onClick={() => handleRoleButtonClick('TA')}
            >
              TA
            </button>
        </div>
        </div>
        <h1 className="verify-otp-heading">Verify OTP</h1>
        <div className="otp-input-container">
          <input
            type="text"
            value={otps[0]}
            onChange={(e) => handleOTPChange(0, e.target.value)}
            onKeyDown={(e) => {
              if (!/^\d$/.test(e.key)) {
                e.preventDefault();
              }
            }}
            maxLength={1}
            className="otp-input"
          />
          <input
            type="text"
            value={otps[1]}
            onChange={(e) => handleOTPChange(1, e.target.value)}
            onKeyDown={(e) => {
              if (!/^\d$/.test(e.key)) {
                e.preventDefault();
              }
            }}
            maxLength={1}
            className="otp-input"
          />
          <input
            type="text"
            value={otps[2]}
            onChange={(e) => handleOTPChange(2, e.target.value)}
            onKeyDown={(e) => {
              if (!/^\d$/.test(e.key)) {
                e.preventDefault();
              }
            }}
            maxLength={1}
            className="otp-input"
          />
          <input
            type="text"
            value={otps[3]}
            onChange={(e) => handleOTPChange(3, e.target.value)}
            onKeyDown={(e) => {
              if (!/^\d$/.test(e.key)) {
                e.preventDefault();
              }
            }}
            maxLength={1}
            className="otp-input"
          />
        </div>
        <button onClick={handleVerifyOTP} className="verify-button">
          Verify
        </button>
        <p className="resend-otp">Didn't Receive OTP?{' '} <a className="resend-link" href="#" onClick={handleResendOTP}> Resend OTP</a></p>
        <p className="resend-message">
        An OTP has been sent to your registered Email address or Phone number. Please verify it.
        </p>

      </div>
    </div>
    </div>
  );
};

export default VerifyOTP;
