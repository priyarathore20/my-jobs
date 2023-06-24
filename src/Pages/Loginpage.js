import React from 'react'
import "../Home.css"

const Loginpage = () => {
  return (
    <div className="bg">
      <div className="upper">
        <div className='navbar'>
          <h1 className="logo">MyJobs</h1>
        </div>
        <div className="upper-section">
          <div className="login-card">
            <h4 className='login-title'>Login</h4>
            <div className='login-details'>
              <label >Email address</label>
              <input className='input' type="email" placeholder='Enter your email' />
              <label >Password</label>
              <input className='input' type="password" placeholder='Enter your Password' />
              <a href="/password-reset">Forgot Your Password?</a>
            </div>
            <button className='login-btn' type="button">Submit</button>
            <p className='signup-para'>New To MyJobs? <a href="/signup">Create An Account.</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage