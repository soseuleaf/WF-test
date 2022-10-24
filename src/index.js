/**
 * proj_path: ch06/ex/proj/sample-prj
 * ./src/index.js
 */

// import react, react-dom/client, and module
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
