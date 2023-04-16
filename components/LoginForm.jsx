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
        width={1000}
        height={1000}
        src="/images/login_crop.png"
        alt="login"
        />
      </div>
    <div className="registraion-right-container">
    <h1>Login form</h1>
    <p>Hello User! Welcome Back</p>
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
      <div className='login-btn'>
      <button type="submit">Login</button>
      </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default LoginForm