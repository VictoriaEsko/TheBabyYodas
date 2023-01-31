import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom" //import the router we need

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    {/* wrap our entire application in the router */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
) 