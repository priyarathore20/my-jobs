import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Button from "../../Components/Button"

const PostedCards = (props) => {

  return (
    <div className="Job-cards">
      <div className="job-card">
        <div className="jobcard-body">
          <div className="jobcard-header">Job No. : {props.number}</div>
          <p className="jobcard-text">{props.text}</p>
          <div className='jobcard-btn'>
            <div className='jobcard-icon'>
              <FaMapMarkerAlt />
              <p>{props.location}</p>
            </div>
            <Button text={props.button} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default PostedCards