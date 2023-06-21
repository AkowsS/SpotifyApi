import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FindProvider } from './context/Context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FindProvider>
      <App />
    </FindProvider>
  </React.StrictMode>,
)
