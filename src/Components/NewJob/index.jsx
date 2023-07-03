import React, { useState } from 'react'
import Button from "../../Components/Button"
import Name from "../../Components/Name"
import Input from '../../Components/input'
import { FaHome } from 'react-icons/fa'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import "./styles.css"
import { Avatar } from '@mui/material'

const NewPost = () => {
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [jobLocation, setJobLocation] = useState('')
  const [error, setError] = useState({ jobTitle: false, jobDescription: false, jobLocation: false });

  const handleFormSubmit = (e) => {
    let error = { jobTitle: false, jobDescription: false, jobLocation: false }
    e.preventDefault();
    console.log('clicked');
    if (jobTitle.trim() === '') {
      error = {
        ...error,
        jobTitle: true,
      };
    }
    if (jobDescription.trim() === '') {
      error = {
        ...error,
        jobDescription: true,
      };
    }
    if (jobLocation.trim() === '') {
      error = {
        ...error,
        jobLocation: true,
      };
    }
    setError(error)
    console.log(error);
  };


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
          <form onSubmit={handleFormSubmit}>
            <Input error={error.jobTitle} onChange={(e) => setJobTitle(e.target.value)} value={jobTitle} type='text' label='Job Title*' placeholder='Enter job title' />
            <Input error={error.jobDescription} onChange={(e) => setJobDescription(e.target.value)} value={jobDescription} type='text' label='Job Description*' placeholder='Enter job description' />
            <Input error={error.jobLocation} onChange={(e) => setJobLocation(e.target.value)} value={jobLocation} type='text' label='Location*' placeholder='Enter location' />
            <Button type='submit' text='Post' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPost