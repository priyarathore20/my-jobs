import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const JobCards = () => {
  return (
    <div className="Job-cards">
      <div className="job-card">
        <div className="card-header">
        </div>
        <div className="card-body">
          <h5 className="card-title">Job No. : </h5>
          <p className="card-text">job information is given below.</p>
          <div className='card-btn'>
            <div className='card-icon'>
              < FaMapMarkerAlt />
              <p>Delhi</p>
            </div>
            <button className="btn-primary">Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCards