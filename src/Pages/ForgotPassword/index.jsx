import React from 'react'
import "./styles.css"
import Input from '../../Components/input'
import Name from "../../Components/Name"
import Button from "../../Components/Button"

const ForgotPassword = () => {
  return (
    <div className='body'>
      <div>
        <div className='navbar'>
          <Name />
          <button className="nav-login">Login/Signup</button>
        </div>
        <div className='password'>
          <div className="password-card">
            <div className="password-details">
              <h4 className='password-title'>Forgot Your Password?</h4>
              <p className='password-para'>Enter your email associated with your account and we will send you a confirmation code.</p>
              <Input label='Email address' placeholder='Enter your email' />
              <Button text='Submit' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword