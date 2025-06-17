import Router from './router.jsx'

import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

import { createRoot } from 'react-dom/client'; // Asegúrate de importar createRoot de 'react-dom/client'
import { StrictMode } from 'react';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    <SpeedInsights />
    <Analytics />
  </StrictMode>,
)
