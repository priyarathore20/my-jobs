import React, { useState } from 'react'
import Name from "../../Components/Name"
import Input from "../../Components/input"
import Button from "../../Components/Button"

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({ newPassword: false, confirmPassword: false });

  const handleFormSubmit = (e) => {
    let error = { newPassword: false, confirmPassword: false }
    e.preventDefault();
    console.log('clicked');
    if (newPassword.trim() === '') {
      error = {
        ...error,
        newPassword: true,
      };
    }
    if (confirmPassword.trim() === '') {
      error = {
        ...error,
        confirmPassword: true,
      };
    }
    setError(error)
  }
  return (
    <div>
      <div className='body'>
        <div className='navbar'>
          <Name />
          <button className="nav-login">Login/Signup</button>
        </div>
        <div className="upper-section">
          <div className="job-card">
            <form onSubmit={handleFormSubmit} className="reset-details">
              <h4 className='password-title'>Reset Your Password</h4>
              <p className='password-para'>Enter your new password below.</p>
              <Input error={error.newPassword} onChange={(e) => setNewPassword(e.target.value)} value={newPassword} label='Enter new Password' placeholder="Enter Password" type='password' />
              <Input error={error.confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} label='Confirm Password' placeholder="Confirm Password" type='password' />
              <Button type='submit' text='Reset' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ResetPassword;