import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import { routes } from './Router/routes';

const App = () => {
  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user != null) {
      //  to parse json from string
      setCurrentUser(JSON.parse(user));

      console.log(user);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item) => {
          const { name, component: Component, isProtected, path } = item;
          const isAuthenticated = localStorage.getItem('user') != null;

          return (
            <Route
              key={name}
              path={path}
              element={
                !isProtected || isAuthenticated ? (
                  <Component />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
