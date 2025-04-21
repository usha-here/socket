import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {CssBaseline} from '@mui/material';       // Import CssBaseline from MUI and add the usual css effects

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>,
)
