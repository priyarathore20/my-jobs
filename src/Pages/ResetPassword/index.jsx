import React from 'react'
import Name from "../../Components/Name"
import Input from "../../Components/input"
import Button from "../../Components/Button"

const ResetPassword = () => {
  return (
    <div>
      <div className='body'>
        <div className='navbar'>
          <Name />
          <button className="nav-login">Login/Signup</button>
        </div>
        <div className="upper-section">
          <div className="job-card">
            <div className="reset-details">
              <h4 className='password-title'>Reset Your Password</h4>
              <p className='password-para'>Enter your new password below.</p>
              <Input label='Enter new Password' placeholder="Enter Password" type='password' />
              <Input label='Confirm Password' placeholder="Confirm Password" type='password' />
              <Button text='Reset' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword