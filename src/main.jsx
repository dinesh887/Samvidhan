import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { BookmarkProvider } from './context/BookmarkContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'

document.documentElement.classList.remove('dark')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <BookmarkProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BookmarkProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)
