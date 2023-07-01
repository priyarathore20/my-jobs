import { Avatar } from '@mui/material'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import Name from '../../Components/Name'
import PostedCards from '../../Components/PostedCards'
import './styles.css'

const PostedJobs = () => {
  return (
    <div className='body'>
      <div className='navbar'>
        < Name />
        <div className="post">
          <a className='Post-link' href="/new-post">Post a job</a>
          <Avatar>P</Avatar>
        </div>
      </div>
      <div className="home">
        <FaHome /> Home
      </div>
      <div className="job-heading">
        Jobs Posted By You :
      </div>
      <div className="job-cards">
        <PostedCards number='1' text='Job Information is given here.' location='Delhi' button='View Applications' />
        <PostedCards number='2' text='Job Information is given here.' location='Delhi' button='View Applications' />
        <PostedCards number='3' text='Job Information is given here.' location='Delhi' button='View Applications' />
        <PostedCards number='4' text='Job Information is given here.' location='Delhi' button='View Applications' />
        <PostedCards number='5' text='Job Information is given here.' location='Delhi' button='View Applications' />
        <PostedCards number='6' text='Job Information is given here.' location='Delhi' button='View Applications' />
        <PostedCards number='7' text='Job Information is given here.' location='Delhi' button='View Applications' />
        <PostedCards number='8' text='Job Information is given here.' location='Delhi' button='View Applications' />
        <PostedCards number='9' text='Job Information is given here.' location='Delhi' button='View Applications' />
      </div>
    </div >
  )
}

export default PostedJobs