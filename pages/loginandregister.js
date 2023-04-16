import React from 'react'
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'
import { useState } from 'react';

function loginandregister() {
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = () => {
      setShowLogin(true);
      setShowRegister(false);
    };

    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

  return (
   <>
   <div className="login-register-container">
    <div className="login-register-box">
    <div className="check-buttons">
    <button onClick={handleLoginClick}>Login</button>
    <button onClick={handleRegisterClick}>Register</button>
    </div>
    {showRegister && <RegistrationForm/>}
    {showLogin && <LoginForm/>}
    </div>
   </div>
   </>
  )
}

export default loginandregister