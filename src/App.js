import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import Loginpage from './Pages/Loginpage';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/login'} element={<Loginpage />} />
        <Route path={'/password-reset'} element={<ForgotPassword />} />
        <Route path={'/new-password'} element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
