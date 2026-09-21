import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BookmarkProvider } from './context/BookmarkContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <ThemeProvider>
          <LanguageProvider>
            <BookmarkProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </BookmarkProvider>
          </LanguageProvider>
        </ThemeProvider>
      </StaticRouter>
    </React.StrictMode>
  )
}