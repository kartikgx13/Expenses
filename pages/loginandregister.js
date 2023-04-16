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
   {/*<section className="login-main-section">
   <div className="login-register-container">
    <div className="login-register-box">
    <div className="check-buttons">
    <div><button onClick={handleLoginClick}>Login</button></div>
    <div><button onClick={handleRegisterClick}>Register</button></div>
    </div>
    {showRegister && <RegistrationForm/>}
    {showLogin && <LoginForm/>}
    </div>
   </div>
  </section>*/}
   </>
  )
}

export default loginandregister