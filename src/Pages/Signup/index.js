import React, { useState } from 'react';
import './Styles.css';
import Button from '../../Components/Button';
import Input from '../../Components/input';
import Name from '../../Components/Name';

const Signup = () => {
  const [userType, setUserType] = useState();

  return (
    <div className="body">
      <div className="navbar">
        <Name />
      </div>
      <div className="signup-card">
        <h2>Signup</h2>
        <span>i'm a</span>
        <div className="buttons">
          <div
            className={`usertype-btn ${
              userType === 0 ? 'usertype-btn-selected' : 'a'
            }`}
            onClick={() => setUserType(0)}
          >
            Recruiter
          </div>
          <div
            className={`usertype-btn ${
              userType === 1 ? 'usertype-btn-selected' : ''
            }`}
            onClick={() => setUserType(1)}
          >
            Candidate
          </div>
          {/* < Button text='Recruiter' onClick={() => setUserType("recruiter")} />
          < Button text='Candidate' onClick={() => setUserType("candidate")}/> */}
        </div>
        <div className="forms">
          <Input label="Name*" placeholder="Enter your full name" type="text" />
          <Input
            label="Email address*"
            placeholder="Enter your email"
            type="text"
          />
          <div className="form">
            <Input
              label="Create password*"
              placeholder="Enter your password"
              type="password"
            />
            <Input
              label="Confirm password*"
              placeholder="Confirm password"
              type="password"
            />
          </div>
          <Input label="Skills" placeholder="Enter your skills" type="text" />
        </div>
        <Button text="Signup" />
      </div>
    </div>
  );
};

export default Signup;
