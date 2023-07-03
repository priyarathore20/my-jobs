import React, { useState } from 'react'
import "./styles.css"
import Input from '../../Components/input'
import Name from "../../Components/Name"
import Button from "../../Components/Button"

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState({ email: false });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    if (email.trim() === '') {
      setError({
        ...error,
        email: true,
      });
    }

    return (
      <div className='body'>
        <div>
          <div className='navbar'>
            <Name />
            <button className="nav-login">Login/Signup</button>
          </div>
          <form onSubmit={handleFormSubmit} className='password'>
            <div className="password-card">
              <div className="password-details">
                <h4 className='password-title'>Forgot Your Password?</h4>
                <p className='password-para'>Enter your email associated with your account and we will send you a confirmation code.</p>
                <Input error={error.email} onChange={(e) => setEmail(e.target.value)} value={email} type='text' label='Email address' placeholder='Enter your email' />
                <Button type='submit' text='Submit' />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ForgotPassword