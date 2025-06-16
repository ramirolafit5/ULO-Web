import Router from './router.jsx'
import { createRoot } from 'react-dom/client'; // Asegúrate de importar createRoot de 'react-dom/client'
import { StrictMode } from 'react';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
