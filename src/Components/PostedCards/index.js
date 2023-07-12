import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../../Components/Button';

const PostedCards = ({
  onButtonClick = () => {},
  button,
  number,
  text,
  location,
}) => {
  return (
    <div className="Job-cards">
      <div className="job-card">
        <div className="jobcard-body">
          <div className="card-header">{number}</div>
          <p className="jobcard-text" style={{fontSize: 15}}>{text}</p>
          <div className="jobcard-btn">
            <div className="jobcard-icon">
              <FaMapMarkerAlt />
              <p className='jobcard-location'>{location}</p>
            </div>
            <Button onClick={onButtonClick} text={button} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedCards;
