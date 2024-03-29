import Link from "next/link"
import React from "react"
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'
import { useState } from "react"
export default function Home(){
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [buttonColorLogin,setButtonColorLogin]=useState("#326789");
    const [buttonColorRegister,setButtonColorRegister]=useState("ghostwhite");

    const handleLoginClick = () => {
      setShowLogin(true);
      setShowRegister(false);
      setButtonColorLogin("#326789");
      setButtonColorRegister("ghostwhite");
    };

    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowLogin(false);
        setButtonColorLogin("ghostwhite")
        setButtonColorRegister("#326789")
    };
  return(
    <>

   <section className="login-main-section">
   <div className="login-register-container">
    <div className="login-register-box">
    <div className="check-buttons">
    <div><button onClick={handleLoginClick} style={{backgroundColor: buttonColorLogin,color:"black"}}>Login</button></div>
    <div><button onClick={handleRegisterClick} style={{backgroundColor: buttonColorRegister,color:"black"}}>Register</button></div>
    </div>
    {showRegister && <RegistrationForm/>}
    {showLogin && <LoginForm/>}
    </div>
   </div>
  </section>
    </>
  )
}
