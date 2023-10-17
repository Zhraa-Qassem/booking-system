// Import necessary libraries
import React from 'react';
import { createRoot } from 'react-dom/client';// Import createRoot from react-dom
import App from './App'; //  main application component
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './config/AuthContext'

// Find the root DOM element
const root = document.getElementById('root');

// Create a root using createRoot
const reactRoot = createRoot(root);

// Render React app inside the root using createRoot
reactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />
  </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Report web vitals
reportWebVitals();

