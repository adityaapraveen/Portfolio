import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SplashCursor from './animations/SplashCursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SplashCursor />
    <App />
  </React.StrictMode>
);
