import React, { useContext, useState } from 'react';
import './styles.css';
import Input from '../../Components/input';
import Button from '../../Components/Button';
import Name from '../../Components/Name';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [email, setEmail] = useState('abcd@1234gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState({ email: false, password: false });
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://jobs-api.squareboat.info/api/v1/auth/login',
        {
          email: email,
          password: password,
        }
      );
      setCurrentUser(response.data.data);

      localStorage.setItem('user', JSON.stringify(response.data.data));
      navigate('/available-jobs');
    } catch (error) {
      setError(error);
      enqueueSnackbar(error.message, { variant: 'error' });
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
