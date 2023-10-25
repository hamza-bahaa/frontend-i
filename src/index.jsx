import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
//import { ChakraProvider } from '@chakra-ui/react'
//import ReactDOM from 'react-dom/client'

// Import Bootstrap CSS and JavaScript
import 'bootstrap'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import 'flowbite'

// Import Font Awesome CSS
import 'font-awesome/css/font-awesome.min.css'

// Import App component
import App from './App.jsx'

// Import service worker registration code
//import * as serviceWorker from './serviceWorker'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
//serviceWorker.register()

// Register service worker for offline functionality
// root.render(<App  tab="home"  />)
//const container = document.getElementById('app')
//const root = createRoot(container) // createRoot(container!) if you use TypeScript
