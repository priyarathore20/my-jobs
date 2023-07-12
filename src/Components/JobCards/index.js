import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import "./styles.css"

const JobCards = () => {
  return (
    <>
      <div className="job-card">
        <div className="jobcard-body">
          <div className="card-header"></div>
          <p className="jobcard-text"></p>
          <div className='jobcard-btn'>
            <div className='jobcard-icon'>
              < FaMapMarkerAlt />
              <p className='jobcard-location'>Delhi</p>
            </div>
            <button className="btn-primary">Apply</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobCards