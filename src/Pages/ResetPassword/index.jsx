import React, { useState } from 'react';
import Name from '../../Components/Name';
import Input from '../../Components/input';
import Button from '../../Components/Button';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // console.log(searchParams.get('token'))

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: 'post',
        url: 'https://jobs-api.squareboat.info/api/v1/auth/resetpassword',
        data: {
          password: newPassword,
          confirmPassword: confirmPassword,
          token: searchParams.get('token'),
        },
      });
      navigate('/login');
    } catch (error) {
      // setError(error)
      enqueueSnackbar(error?.response?.data?.message, { variant: 'error' });
      console.log(error);
    }
  };
  return (
    <div>
      <div className="body">
        <div className="navbar">
          <Name />
          <button className="nav-login">Login/Signup</button>
        </div>
        <div className="upper-section">
          <div className="job-card">
            <form onSubmit={handleFormSubmit} className="reset-details">
              <h4 className="password-title">Reset Your Password</h4>
              <p className="password-para">Enter your new password below.</p>
              <Input
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                label="Enter new Password"
                placeholder="Enter Password"
                type="password"
              />
              <Input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
              />
              <Button type="submit" text="Reset" onClick={handleFormSubmit} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
