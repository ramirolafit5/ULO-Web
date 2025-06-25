import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imagen1 from "../../assets/fotoCarrusel1.webp";
import imagen2 from "../../assets/fotoCarrusel2.webp";
import imagen3 from "../../assets/fotoCarrusel3.webp";
import imagen4 from "../../assets/fotoCarrusel4.webp";
import imagen5 from "../../assets/fotoCarrusel5.webp";
import imagen6 from "../../assets/fotoCarrusel6.webp";

import styles from './ExtraPresentation.module.css';

function ImageCarousel() {
    const images = [
        {
            id: 1,
            src: imagen1,
            alt: "Descripción de la imagen 1 del carrusel"
        },
        {
            id: 2,
            src: imagen2,
            alt: "Descripción de la imagen 2 del carrusel"
        },
        {
            id: 3,
            src: imagen3,
            alt: "Descripción de la imagen 3 del carrusel"
        },
        {
            id: 4,
            src: imagen4,
            alt: "Descripción de la imagen 4 del carrusel"
        },
        {
            id: 5,
            src: imagen5,
            alt: "Descripción de la imagen 5 del carrusel"
        },
        {
            id: 6,
            src: imagen6,
            alt: "Descripción de la imagen 6 del carrusel"
        }
    ];

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
        <div className={styles["main-content"]}>
            <div className={styles["slider-wrapper"]}>
                <h2 className={styles["slider-title"]}>ULO a través del tiempo...</h2>
                <Slider {...settings}>
                    {/* Mapeamos el array de imágenes para renderizar cada diapositiva */}
                    {images.map(image => (
                        // Cada diapositiva es un 'div' con una clave única para React
                        <div key={image.id} className={styles["carousel-item-container"]}>
                            <img
                                src={image.src} // Fuente de la imagen
                                alt={image.alt} // Texto alternativo para accesibilidad
                                className={styles["carousel-image"]} // Clase para la imagen
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

// Exporta el componente para ser utilizado en otras partes de la aplicación
export default ImageCarousel;
