import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const PostedCards = () => {

  return (
    <div className="Job-cards">
      <div className="job-card">
        <div className="jobcard-body">
          <div className="jobcard-header">Job No. : </div>
          <p className="jobcard-text">job information is given below.</p>
          <div className='jobcard-btn'>
            <div className='jobcard-icon'>
              <FaMapMarkerAlt />
              <p>Delhi</p>
            </div>
            <button className="jobcard-btn">View Applications</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PostedCards