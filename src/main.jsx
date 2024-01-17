import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-emerald-600 container mx-auto px-4 '>
    <React.StrictMode >
      <App />
    </React.StrictMode>,
  </div>
)
