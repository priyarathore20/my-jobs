import React, { useState } from 'react'
import "./styles.css"
import Input from '../../Components/input'
import Button from "../../Components/Button"
import Name from "../../Components/Name"

const Loginpage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="body">
      <div >
        <div className='navbar'>
          <Name />
        </div>
        <div className="upper-section">
          <div className="job-card">
            <h4 className='login-title'>Login</h4>
            <div className='login-details'>
              <Input onChange={e => setEmail(e.target.value)} value={email} label='Email address' type='text' placeholder='Enter your email' />
              <Input onChange={e => setPassword(e.target.value)} value={password} label='Password' type='password' placeholder='Enter password' />
              <a className='login-link' href="/password-reset">Forgot Your Password?</a>
            </div>
            <Button text="Submit" />
            <p className='login-link-1'>New To MyJobs? <a className='login-link-2' href="/signup">Create An Account.</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage