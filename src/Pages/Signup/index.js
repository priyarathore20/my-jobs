import React, { useState } from 'react';
import './Styles.css';
import Button from '../../Components/Button';
import Input from '../../Components/input';
import Name from '../../Components/Name';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const Signup = () => {
  const [userType, setUserType] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [skills, setSkills] = useState('');
  const [error, setError] = useState({ name: false, email: false, password: false, confirmPassword: false, skills: false });

  const handleFormSubmit = async (e) => {
    let error = { name: false, email: false, password: false, confirmPassword: false, skills: false }
    e.preventDefault();
    console.log('clicked');
    if (error.email === true || error.password === true || error.name === true || error.confirmPassword === true || error.skills === true && password !== confirmPassword) {
      return;
    }
    try {
      const response = await axios.post('https://jobs-api.squareboat.info/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        skills: skills
      });
      console.log("response :", response.data)
    } catch (error) {
      setError(error)
      enqueueSnackbar(error.message, { variant: 'error' })
      console.log(error)
    }
  };

  return (
    <div className="body">
      <div className="navbar">
        <Name />
      </div>
      <div className="signup">
        <form onSubmit={handleFormSubmit} className="signup-card">
          <h2>Signup</h2>
          <span>i'm a</span>
          <div className="buttons">
            <div
              className={`usertype-btn ${userType === 0 ? 'usertype-btn-selected' : ''
                }`}
              onClick={() => setUserType(0)}
            >
              Recruiter
            </div>
            <div
              className={`usertype-btn ${userType === 1 ? 'usertype-btn-selected' : ''
                }`}
              onClick={() => setUserType(1)}
            >
              Candidate
            </div>
          </div>
          <div className="forms">
            <Input
              error={error.name}
              onChange={(e) => setName(e.target.value)}
              value={name}
              label="Name*"
              placeholder="Enter your full name"
              type="text"
            />
            <Input
              error={error.email}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="Email address*"
              placeholder="Enter your email"
              type="text"
            />
            <div className="form">
              <Input
                error={error.password}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                label="Create password*"
                placeholder="Enter your password"
                type="password"
              />
              <Input
                error={error.confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                label="Confirm password*"
                placeholder="Confirm password"
                type="password"
              />
            </div>
            <Input
              error={error.skills}
              onChange={(e) => setSkills(e.target.value)}
              value={skills}
              label="Skills"
              placeholder="Enter your skills"
              type="text"
            />
          </div>
          <Button type="submit" text="Signup" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
