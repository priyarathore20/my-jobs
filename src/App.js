import React from 'react';
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/login'} element={<Loginpage />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/password-reset'} element={<ForgotPassword />} />
        <Route path={'/new-password'} element={<ResetPassword />} />
        <Route path={'/available-jobs'} element={<AvailableJobs />} />
        <Route path={'/posted-jobs'} element={<PostedJobs />} />
        <Route path={'/new-post'} element={<NewPost />} />
        <Route path={'/applied-jobs'} element={<AppliedJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
