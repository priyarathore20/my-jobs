import React, { useState } from 'react'
import "../Home.css"
import Input from '../Components/input'

const Loginpage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

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
              <Input label='Email address' type='text' placeholder='Enter your email' />
              <Input label='Password' type='password' placeholder='Enter password' />
              <a href="/password-reset">Forgot Your Password?</a>
            </div>
            <button className='login-btn' type="button" >Submit</button>
            <p className='signup-para'>New To MyJobs? <a href="/signup">Create An Account.</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage