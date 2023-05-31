import { ChakraBaseProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
