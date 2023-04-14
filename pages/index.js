export default function Home(){
  return(
    <>
    <div className="register">
    <h1>Registration form</h1>
    <form action="/api/register" method="post">
      <label htmlFor="email">E-mail Address</label>
      <input type="email" placeholder="Enter your e-mail" name="email"/>
      <label htmlFor="pwd">Enter your password</label>
      <input type="password" placeholder="Enter your password" name="password"/>
      <input type="submit" value="Register"/>
    </form>
    </div>
    <div className="login">
    <h1>Login form</h1>
    <form action="/api/newlogin" method="post">
      <label htmlFor="email">E-mail Address</label>
      <input type="email" placeholder="Enter your e-mail" name="email"/>
      <label htmlFor="pwd">Enter your password</label>
      <input type="password" placeholder="Enter your password" name="password"/>
      <input type="submit" value="Register"/>
    </form>
    </div>
    </>
  )
}
