import React from 'react'
import Name from '../../Components/Name'
import { Avatar } from '@mui/material'
import "./styles.css"
import JobCards from '../../Components/JobCards'
import PostedCards from '../../Components/PostedCards'
import { FaHome } from 'react-icons/fa'

const AvailableJobs = () => {
  return (
    <div className='body'>
      <div className='navbar'>
        < Name />
        <div className="applied-jobs">
          <a className='apply-link' href="/applied-jobs">Applied jobs</a>
          <Avatar className='avatar'>P</Avatar>
        </div>
      </div>
      <div className="breadcrumb">
        <p className='path'><FaHome className='new-icon' /> Home</p>
      </div>
      <div >
        <p className="job-heading-1">Jobs Available for you :</p>
      </div>
      <div className="job-cards">
        <PostedCards number='1' text='Job Information is given here.' location='Delhi' button='Apply' />
        <PostedCards number='2' text='Job Information is given here.' location='Delhi' button='Apply' />
        <PostedCards number='3' text='Job Information is given here.' location='Delhi' button='Apply' />
        <PostedCards number='4' text='Job Information is given here.' location='Delhi' button='Apply' />
        <PostedCards number='5' text='Job Information is given here.' location='Delhi' button='Apply' />
        <PostedCards number='6' text='Job Information is given here.' location='Delhi' button='Apply' />
        <PostedCards number='7' text='Job Information is given here.' location='Delhi' button='Apply' />
        <PostedCards number='8' text='Job Information is given here.' location='Delhi' button='Apply' />
        <PostedCards number='9' text='Job Information is given here.' location='Delhi' button='Apply' />
      </div>
    </div>
  )
}

export default AvailableJobs