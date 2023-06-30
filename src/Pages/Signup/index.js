import React from 'react'
import "./Styles.css"
import Button from '../../Components/Button'
import Input from '../../Components/input'
import Name from "../../Components/Name"

const Signup = () => {
  return (
    <div className='body'>
      <div className='navbar'>
        <Name />
      </div>
      <div className='signup-card'>
        <h2>Signup</h2>
        <span>i'm a</span>
        <div className="buttons">
          < Button text='Recruiter' />
          < Button text='Candidate' />
        </div>
        <div className='forms'>
          <Input label='Name*' placeholder='Enter your full name' type='text' />
          <Input label='Email address*' placeholder='Enter your email' type='text' />
          <div className='form'>
            <Input label='Create password*' placeholder='Enter your password' type='password' />
            <Input label='Confirm password*' placeholder='Confirm password' type='password' />
          </div>
          <Input label='Skills' placeholder='Enter your skills' type='text' />
        </div>
        <Button text='Signup' />
      </div>
    </div>
  )
}

export default Signup