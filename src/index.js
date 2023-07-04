import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { useAuthContext } from './context/Context';
import { SnackbarProvider } from 'notistack'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <useAuthContext>
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SnackbarProvider>
  // </useAuthContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
