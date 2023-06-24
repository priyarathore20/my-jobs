import React from 'react'
import "../Home.css"

const ForgotPassword = () => {
  return (
    <div className="bg">
      <div className="upper">
        <div className='navbar'>
          <h1 className="logo">MyJobs</h1>
          <button className="nav-login">Login/Signup</button>
        </div>
        <div className="upper-section">
          <div className="password-card">
            <div className="password-details">
              <h4 className='password-title'>Forgot Your Password?</h4>
              <p className='password-para'>Enter your email associated with your account and we will send you a confirmation code.</p>
              <label>Email address</label>
              <input className='input' placeholder='Enter yor email' />
              <button className='login-btn'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword