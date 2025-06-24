// postcss.config.js
import autoprefixer from 'autoprefixer';

// Importa purgecss usando 'require' si estás en un entorno Node que lo soporta,
// o asegúrate de que la importación default se use correctamente.
// La forma más robusta con ESM (ES Modules) que usa Vite es a menudo así:
import _purgecss from '@fullhuman/postcss-purgecss';
const purgecss = _purgecss; // Asignamos la importación por defecto a una constante

// Asegúrate de que esto solo se ejecute en producción
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default {
  plugins: [
    autoprefixer(),
    // Solo aplica PurgeCSS en producción
    IS_PRODUCTION && purgecss({
      content: [
        './index.html', // Ruta a tu HTML principal
        './src/**/*.{js,jsx,ts,tsx}', // Rutas a tus archivos JavaScript/TypeScript (donde usas clases CSS)
      ],
      safelist: [
        // Clases que no deben ser purgadas, ej: para librerías o clases dinámicas
        'slick-slide', // Si usas React Slick o similar para el carrusel
        'slick-active',
        'slick-current',
        'slick-dots',
        // Añade aquí cualquier otra clase que sepas que se usa dinámicamente
      ],
    }),
  ].filter(Boolean), // Elimina los valores 'false' si PurgeCSS no se aplica en desarrollo
};