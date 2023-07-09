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
          <div className="jobcard-header">Job No. : {number}</div>
          <p className="jobcard-text">{text}</p>
          <div className="jobcard-btn">
            <div className="jobcard-icon">
              <FaMapMarkerAlt />
              <p>{location}</p>
            </div>
            <Button onClick={onButtonClick} text={button} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedCards;
