import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { RoleProvider } from './context/RoleContext'
import { NotificationProvider } from './context/SimpleNotificationContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RoleProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </RoleProvider>
    </BrowserRouter>
  </StrictMode>,
)
