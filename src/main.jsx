import Router from './router.jsx'
import { createRoot } from 'react-dom/client'; // Asegúrate de importar createRoot de 'react-dom/client'
import { StrictMode } from 'react';
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/react"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    <SpeedInsights />
  </StrictMode>,
)
