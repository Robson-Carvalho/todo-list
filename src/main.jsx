import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { reset } from './styles/global.style'
import { App } from './App'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #191919;
    color: #f2f2f2;
    min-height: 100vh
  }

  body, * {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
