import React from 'react'
import Button from "../../Components/Button"
import Name from "../../Components/Name"
import Input from '../../Components/input'
import { FaHome } from 'react-icons/fa'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import "./styles.css"
import { Avatar } from '@mui/material'

const NewPost = () => {
  return (
    <div className='body'>
      <div className="navbar">
        <div><Name /></div>
        <div><Avatar className='avatar'>P</Avatar></div>
      </div>
      <div className="breadcrumb">
        <p ><a className='new-path' href="/posted-jobs"><FaHome className='new-icon' /> Home </a><LiaGreaterThanSolid className='new-icon' /> New Post </p>
      </div>
      <div className='job-card'>
        <div >
          <h3 className='new-title'>Post a Job</h3>
        </div>
        <div>
          <Input label='Job Title*' placeholder='Enter job title' />
          <Input label='Job Description*' placeholder='Enter job description' />
          <Input label='Location*' placeholder='Enter location' />
        </div>
        <Button text='Post' />
      </div>
    </div>
  )
}

export default NewPost