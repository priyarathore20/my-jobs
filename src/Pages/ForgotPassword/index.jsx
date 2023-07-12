import React, { useContext, useState } from 'react';
import './styles.css';
import Input from '../../Components/input';
import Name from '../../Components/Name';
import Button from '../../Components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar, useSnackbar } from 'notistack';
import { AuthContext } from '../../Context/AuthContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({ email: false });
  const {currentUser, setCurrentUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleFormSubmit = (e) => {
    let error = { email: false };
    e.preventDefault();
    console.log('clicked');
    if (email.trim() === '') {
      error = {
        ...error,
        email: true,
      };
    }
    setError(error);
  };

  const fetchForgotPassword = async () => {
    try {
      const res = await axios({
        method: 'get',
        url:
          'https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=' +
          email,
        data: {
          email: email,
        },
      });
      // setCurrentUser(res.data.data)
      navigate('/new-password'+'?token='+res.data.data.token);
    } catch (error) {
      enqueueSnackbar('Enter valid email', { variant: 'error' });
    }
  };
  // console.log(item);

  return (
    <div className="body">
      <div>
        <div className="navbar">
          <Name />
          <button className="nav-login">Login/Signup</button>
        </div>
        <form onSubmit={handleFormSubmit} className="password">
          <div className="password-card">
            <div className="password-details">
              <h4 className="password-title">Forgot Your Password?</h4>
              <p className="password-para">
                Enter your email associated with your account and we will send
                you a confirmation code.
              </p>
              <Input
                error={error.email}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                label="Email address"
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                text="Submit"
                onClick={fetchForgotPassword}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
