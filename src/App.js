import React from 'react';
import './App.css';
import FirebaseProvider from './Context/Firebase';
import HomePage from './Pages/Home';

const App = () => {
  return (
    <FirebaseProvider>
      <HomePage />
    </FirebaseProvider>
  );
}

export default App;
