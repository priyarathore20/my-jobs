import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const PostedCards = () => {
  return (
    <div className="Job-cards">
      <div className="job-card">
        <div className="card-header">
        </div>
        <div className="jobcard-body">
          <h5 className="jobcard-title">Job No. : </h5>
          <p className="jobcard-text">job information is given below.</p>
          <div className='jobcard-btn'>
            <div className='jobcard-icon'>
              <FaMapMarkerAlt />
              <p>Delhi</p>
            </div>
            <button className="btn-primary-1">View Applications</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PostedCards