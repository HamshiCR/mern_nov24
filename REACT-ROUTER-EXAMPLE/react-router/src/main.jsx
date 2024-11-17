import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);