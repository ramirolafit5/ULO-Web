import './CuboGirando.css'
import ulitoScreen from '../assets/ulitoScreen.jpeg'

export default function CuboGirando() {
    return (
        <div className="cubo-container">
            <div className="cubo">
                <div className="cara frente">
                    <img src={ulitoScreen} alt="Frente" />
                </div>
                <div className="cara atras">
                    <img src={ulitoScreen} alt="Atrás" />
                </div>
                <div className="cara derecha">
                    <img src={ulitoScreen} alt="Derecha" />
                </div>
                <div className="cara izquierda">
                    <img src={ulitoScreen} alt="Izquierda" />
                </div>
                <div className="cara arriba">
                    <img src={ulitoScreen} alt="Arriba" />
                </div>
                <div className="cara abajo">
                    <img src={ulitoScreen} alt="Abajo" />
                </div>
            </div>
        </div>
    );
}

