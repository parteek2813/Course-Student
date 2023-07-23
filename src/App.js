import React, { useState } from 'react';
import ResetPassword from './ResetPassword';
import VerifyOTP from './VerifyOTP';
import NewPassword from './NewPassword';
import SuccessPopup from './SuccessPopup';

export const PageContext = React.createContext();

const App = () => {
  const [page, setPage] = useState('reset-password');

  const renderPage = () => {
    switch (page) {
      case 'reset-password':
        return <ResetPassword />;
      case 'verify-otp':
        return <VerifyOTP />;
      case 'new-password':
        return <NewPassword />;
      case 'success-popup':
        return <SuccessPopup />;
      default:
        return null;
    }
  };

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <div className="container mx-auto">{renderPage()}</div>
    </PageContext.Provider>
  );
};

export default App;
