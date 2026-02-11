import React from 'react'
import './index.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// On récupère la base définie dans vite.config.js
const baseUrl = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
)