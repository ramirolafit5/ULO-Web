// postcss.config.js
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss'; // Importación estándar

// Esta parte es crucial para el error "purgecss is not a function"
// A veces, el módulo se exporta de forma que la función principal está en .default
const purgecssPlugin = purgecss.default ? purgecss.default : purgecss;

// Define si estamos en producción (ej. al correr npm run build)
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default {
  plugins: [
    autoprefixer(),
    // Solo aplica PurgeCSS en producción para evitar problemas durante el desarrollo
    IS_PRODUCTION && purgecssPlugin({ // Aquí usamos purgecssPlugin en lugar de purgecss directamente
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
        // Asegúrate de que estas rutas sean correctas y cubran todos los archivos donde usas clases CSS.
        // Si usas componentes de librerías con clases específicas que no se analizan estáticamente,
        // o clases dinámicas, deberías agregarlas a 'safelist'.
      ],
      safelist: [
        // Ejemplos de clases a safelist (añade las que tu proyecto necesite, ej. para carruseles, transiciones)
        // 'slick-slide',
        // 'slick-active',
        // 'fade-in',
        // /regex-para-clases-dinamicas/
      ],
    }),
  ].filter(Boolean), // Filtra los valores `false` si PurgeCSS no se ejecuta en desarrollo
};