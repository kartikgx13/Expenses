import { faEnvelope, faLock, faMailBulk, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function LoginForm() {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [username,setUserName]=useState('');
  const [email,setEmail]=useState("");

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (passwordRegex.test(passwordValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);
  
  

  const handlesubmit=()=>{
    if (!isValid){
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
    }
  }

  return (
    <>
    <div className="registration-form-container">
      <div className="registration-left-container">
        <Image
        src="/images/budget.png"
        alt='expense-logo'
        height={1000}
        width={1000}
        style={{width:"100%",height:"100%"}}
        />
      </div>
    <div className="registraion-right-container">
    <h1>Hello User!</h1>
    <p>Welcome Back</p>
    <form action="/api/newlogin" method="post" onSubmit={handlesubmit}>
    <div>
      <FontAwesomeIcon
      icon={faUser}
      width={50}
      />
      <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} required placeholder="Enter username" name="username"/>
      </div>
      <div>
      <FontAwesomeIcon
      icon={faEnvelope}
      width={50}
      />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your e-mail" name="email"/>
      </div>
      <div>
      <FontAwesomeIcon
      icon={faLock}
      width={50}
      />
      <input type="password" value={password} onChange={handlePasswordChange} required placeholder="Enter your password" name="password"/>
      </div>
      <div className='login-btn' style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
      <button style={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center"}} type="submit">Login</button>
      </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default LoginForm