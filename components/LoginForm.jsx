import React from 'react'

function LoginForm() {
  return (
    <>
    <div className="registration-form-container">
    <h1>Login form</h1>
    <form action="/api/newlogin" method="post">
      <label htmlFor="email">E-mail Address</label>
      <input type="email" placeholder="Enter your e-mail" name="email"/>
      <label htmlFor="pwd">Enter your password</label>
      <input type="password" placeholder="Enter your password" name="password"/>
      <input type="submit" value="Login"/>
    </form>
    </div>
    </>
  )
}

export default LoginForm