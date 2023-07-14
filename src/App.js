import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import Loginpage from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import AvailableJobs from './Pages/AvailableJobs';
import PostedJobs from './Pages/PostedJobs';
import Signup from './Pages/Signup';
import NewPost from './Components/NewJob';
import AppliedJobs from './Pages/AppliedJobs';
import { AuthContext } from './Context/AuthContext';
import PrivateRoute from './Router/PrivateRoute';

const App = () => {
  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user != null) {
      //  to parse json from string
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/login'} element={<Loginpage />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/password-reset'} element={<ForgotPassword />} />
        <Route path={'/new-password'} element={<ResetPassword />} />
        <PrivateRoute path={'/available-jobs'} element={<AvailableJobs />} />
        <PrivateRoute path={'/posted-jobs'} element={<PostedJobs />} />
        <PrivateRoute path={'/new-post'} element={<NewPost />} />
        <PrivateRoute path={'/applied-jobs'} element={<AppliedJobs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
