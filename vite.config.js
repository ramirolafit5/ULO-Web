import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Asegúrate de que este plugin sea el correcto para Tailwind CSS con Vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true, // Agrega esta línea para habilitar los source maps
    // Puedes usar 'true' para generar archivos .map separados,
    // o 'hidden' si quieres que se generen pero no se referencien en el código principal (útil para servicios de monitoreo de errores).
  },
})