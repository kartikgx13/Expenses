import { faEnvelope, faLock, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

function LoginForm() {
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
    <form action="/api/newlogin" method="post">
      <div>
      <FontAwesomeIcon
      icon={faEnvelope}
      width={50}
      />
      <input type="email" placeholder="Enter your e-mail" name="email"/>
      </div>
      <div>
      <FontAwesomeIcon
      icon={faLock}
      width={50}
      />
      <input type="password" placeholder="Enter your password" name="password"/>
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