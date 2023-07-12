import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element : Element, ...rest }) {
  const isAuthenticated = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Element />
        ) : (
          <Navigate replace to="/login" />
        )
      }
    />
  );
}
export default PrivateRoute