import React, { useState } from 'react';
import './styles.css';
import Input from '../../Components/input';
import Button from '../../Components/Button';
import Name from '../../Components/Name';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const Loginpage = () => {
  const [email, setEmail] = useState('abcd@1234gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState({ email: false, password: false });

  const handleFormSubmit = async (e) => {
    let error = { email: false, password: false };
    e.preventDefault();
    console.log('clicked');
    try {
      const response = await axios.post('https://jobs-api.squareboat.info/api/v1/auth/login', {
        email: email,
        password: password
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
      <div>
        <div className="navbar">
          <Name />
        </div>
        <div className="upper-section">
          <form onSubmit={handleFormSubmit}>
            <div className="login-card">
              <h4 className="login-title">Login</h4>
              <div className="login-details">
                <Input
                  error={error.email}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  label="Email address"
                  type="text"
                  placeholder="Enter your email"
                />
                <Input
                  error={error.password}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                />
                <a className="login-link" href="/password-reset">
                  Forgot Your Password?
                </a>
              </div>
              <Button type="submit" text="Submit" />
              <p className="login-link-1">
                New To MyJobs?
                <a className="login-link-2" href="/signup">
                  Create An Account.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
