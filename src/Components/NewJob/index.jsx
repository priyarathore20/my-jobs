import React, { useState } from 'react'
import Button from "../../Components/Button"
import Name from "../../Components/Name"
import Input from '../../Components/input'
import { FaHome } from 'react-icons/fa'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import "./styles.css"
import { Avatar } from '@mui/material'

const NewPost = () => {
  const [jobTitle, setJobTitle] = useState()
  const [jobDescription, setJobDescription] = useState()
  const [jobLocation, setJobLocation] = useState()

  return (
    <div className='body'>
      <div className="navbar">
        <div><Name /></div>
        <div><Avatar className='avatar'>P</Avatar></div>
      </div>
      <div className="breadcrumb">
        <p ><a className='new-path' href="/posted-jobs"><FaHome className='new-icon' /> Home </a><LiaGreaterThanSolid className='New-icon' /> New Post </p>
      </div>
      <div className='signup'>
        <div className='post-card'>
          <div >
            <h3 className='new-title'>Post a Job</h3>
          </div>
          <div>
            <Input onChange={(e) => setJobTitle(e.target.value)} value={jobTitle} type='text' label='Job Title*' placeholder='Enter job title' />
            <Input onChange={(e) => setJobDescription(e.target.value)} value={jobDescription} type='text' label='Job Description*' placeholder='Enter job description' />
            <Input onChange={(e) => setJobLocation(e.target.value)} value={jobLocation} type='text' label='Location*' placeholder='Enter location' />
          </div>
          <Button text='Post' />
        </div>
      </div>
    </div>
  )
}

export default NewPost