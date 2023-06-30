import { Avatar } from '@mui/material'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import Name from '../../Components/Name'
import PostedCards from '../../Components/PostedCards'

const PostedJobs = () => {
  return (
    <div className='body'>
      <div className='navbar'>
        < Name />
        <div className="post">
          <a href="/new-job">Post a job</a>
          <Avatar>P</Avatar>
        </div>
      </div>
      <div className="home">
        <FaHome /> Home
      </div>
      <div className="job-heading">
        Jobs Posted By You :
      </div>
      <div className="cards">
        <PostedCards />
        <PostedCards />
        <PostedCards />
        <PostedCards />
        <PostedCards />
        <PostedCards />
      </div>
    </div >
  )
}

export default PostedJobs