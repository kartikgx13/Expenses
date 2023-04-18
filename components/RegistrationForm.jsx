import React from 'react'
import { faEnvelope, faLock, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

function RegistrationForm() {
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
    <h1>Welcome</h1>
    <p>Please Register Yourself</p>
    <form action="/api/register" method="post">
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
      <button style={{width:"50%"}} type="submit">Register</button>
      </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default RegistrationForm