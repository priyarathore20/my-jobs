import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import "./styles.css"

const JobCards = () => {
  return (
    <>
      <div className="job-card">
        <div className="jobcard-body">
          <div className="card-header">Job No. :</div>
          <p className="jobcard-text">Job information is given below.</p>
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