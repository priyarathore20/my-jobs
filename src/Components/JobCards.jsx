import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const JobCards = () => {
  return (
    <div className="card">
      <div className="card-header">
      </div>
      <div className="card-body">
        <h5 className="card-title">Job No. : </h5>
        <p className="card-text">job information is given below.</p>
        <p>< FaMapMarkerAlt /></p>
        <a href="#" className="btn btn-primary">Apply</a>
      </div>
    </div>
  )
}

export default JobCards