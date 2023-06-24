import React from 'react'

const ResetPassword = () => {
  return (
    <div className="bg">
      <div className="upper">
        <div className='navbar'>
          <h1 className="logo">MyJobs</h1>
          <button className="nav-login">Login/Signup</button>
        </div>
        <div className="upper-section">
          <div className="reset-card">
            <div className="reset-details">
              <h4 className='password-title'>Reset Your Password</h4>
              <p className='password-para'>Enter your new password below.</p>
              <label>New password</label>
              <input className='input' />
              <label>Confirm new password</label>
              <input className='input' />

              <button className='login-btn'>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword