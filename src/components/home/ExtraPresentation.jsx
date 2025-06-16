// src/components/home/ExtraPresentation.jsx (o .tsx)

import React from "react";
import Slider from "react-slick";
// Asegúrate de que estos CSS globales estén importados en tu archivo principal
// (ej. src/main.jsx o src/App.jsx) para evitar duplicidad y asegurar que los estilos de Slick se carguen globalmente.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa tus imágenes aquí. Asegúrate de que las rutas sean correctas.
// Si tienes varias imágenes, impórtalas con nombres distintos:
// import imagen2 from "../../assets/otra_imagen.png";
import imagen1 from "../../assets/fondo5.png";

// Importa tu archivo de CSS Modules para este componente
import styles from './ExtraPresentation.module.css';

// Renombramos el componente para que sea más descriptivo y reutilizable
function ImageCarousel() {
    // Definimos el array de objetos para las imágenes
    // Cada objeto debe tener un ID único, la fuente (src), texto alternativo (alt) y un título.
    const images = [
        {
            id: 1,
            src: imagen1, // Usa la variable importada
            alt: "Una abeja volando en un jardín",
            title: "Las abejas y la polinización"
        },
        {
            id: 2,
            src: imagen1, // Cambia esto por otra imagen si tienes más
            alt: "Un detalle de una abeja en una flor",
            title: "Las abejas y la polinización"
        },
        {
            id: 3,
            src: imagen1,
            alt: "Abejas trabajando en una colmena",
            title: "Organización de la colmena"
        },
        {
            id: 4,
            src: imagen1,
            alt: "Una abeja recolectando néctar",
            title: "Ciclo de vida de las abejas"
        },
        {
            id: 5,
            src: imagen1,
            alt: "Abeja en vuelo capturando el momento",
            title: "Vuelo y comunicación"
        },
        {
            id: 6,
            src: imagen1,
            alt: "Una abeja solitaria",
            title: "Abejas solitarias"
        }
    ];

    // Configuración del carrusel React-Slick
    // Se usa 'const' porque 'settings' no se reasigna
    const settings = {
        dots: true, // Muestra los puntos de navegación en la parte inferior
        infinite: true, // Permite el bucle infinito del carrusel
        slidesToShow: 3, // Muestra 3 diapositivas a la vez
        slidesToScroll: 1, // Desplaza 1 diapositiva por cada acción de navegación
        autoplay: true, // Habilita la reproducción automática
        autoplaySpeed: 2000, // Velocidad de reproducción automática (2 segundos)
        pauseOnHover: true, // Pausa la reproducción automática al pasar el ratón por encima
        arrows: true, // Muestra las flechas de navegación (prev/next)

        // Configuración responsive para diferentes tamaños de pantalla
        responsive: [
            {
                breakpoint: 1024, // Para pantallas de 1024px de ancho o menos
                settings: {
                    slidesToShow: 2, // Muestra 2 diapositivas
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600, // Para pantallas de 600px de ancho o menos
                settings: {
                    slidesToShow: 1, // Muestra 1 diapositiva
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        // Contenedor principal del carrusel, usa las clases de CSS Modules
        <div className={styles["slider-wrapper"]}>
            <h2 className={styles["slider-title"]}>La evolucion de ULO a traves del tiempo..</h2>
            <Slider {...settings}>
                {/* Mapeamos el array de imágenes para renderizar cada diapositiva */}
                {images.map(image => (
                    // Cada diapositiva es un 'div' con una clave única para React
                    <div key={image.id} className={styles["carousel-item-container"]}>
                        <img
                            src={image.src} // Fuente de la imagen
                            alt={image.alt} // Texto alternativo para accesibilidad
                            className={styles["carousel-image"]} // Clase para la imagen
                            loading="lazy"
                        />
                        <p className={styles["carousel-title-text"]}>{image.title}</p> {/* Clase para el título del texto */}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

// Exporta el componente para ser utilizado en otras partes de la aplicación
export default ImageCarousel;
