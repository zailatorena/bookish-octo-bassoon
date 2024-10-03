import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './app/app'

import './styles.css'
import { AppContextProvider } from './context/AppContextProvider'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
)
