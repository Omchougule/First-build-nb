import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/Authcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
          <AuthProvider>
            <>
              <Toaster />
              <App />
            </>
          </AuthProvider>
        </BrowserRouter>
  </React.StrictMode>,
)
