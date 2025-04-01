import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import palette from './theme/palette';
import './index.css'

import App from './App.jsx'

// Set Theme
const currentTheme = createTheme(palette)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={currentTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
