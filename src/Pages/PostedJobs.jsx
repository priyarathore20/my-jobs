import React from 'react'
import { FaHome } from 'react-icons/fa'
import PostedCards from '../Components/PostedCards'

const PostedJobs = () => {
  return (
    <div className="bg">
      <div className="upper">
        <div className='navbar'>
          <h1 className="logo">MyJobs</h1>
          <a
            style={{ color: "#fff", height: 5, paddingRight: 120, fontSize: 20, textDecoration: 'none' }}
            href="/home"><FaHome />
            Home</a>
        </div>
        <div className="upper-section">
          <PostedCards />
          <PostedCards />
          <PostedCards />
          <PostedCards />
          <PostedCards />
          <PostedCards />
        </div>
      </div>
    </div>

  )
}

export default PostedJobs