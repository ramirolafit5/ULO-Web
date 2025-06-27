import './CuboGirando.css'
import ulitoScreen from '../assets/ulitoScreen.webp'
import LogoUloCuadrada from '../assets/LogoULOCuadradaPrueba.jpg'


export default function CuboGirando() {
    return (
        <div className="cubo-container">
            <div className="cubo">
                <div className="cara frente">
                    <img src={LogoUloCuadrada} alt="Frente" />
                </div>
                <div className="cara atras">
                    <img src={LogoUloCuadrada} alt="Atrás" />
                </div>
                <div className="cara derecha">
                    <img src={LogoUloCuadrada} alt="Derecha" />
                </div>
                <div className="cara izquierda">
                    <img src={LogoUloCuadrada} alt="Izquierda" />
                </div>
                <div className="cara arriba">
                    <img src={LogoUloCuadrada} alt="Arriba" />
                </div>
                <div className="cara abajo">
                    <img src={LogoUloCuadrada} alt="Abajo" />
                </div>
            </div>
        </div>
    );
}

