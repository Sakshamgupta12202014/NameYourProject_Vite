import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Start from './Components/Start';

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Start />
  </StrictMode>,
)
