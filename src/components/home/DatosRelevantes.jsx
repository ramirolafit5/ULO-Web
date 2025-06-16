import styles from './DatosRelevantes.module.css';
import uloSentado from '../../assets/ImagenUloSentado.png'
import uloSticker from '../../assets/UlitoStickerPrueba.jpeg'

export default function DatosRelevantes() {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.container}>

                <h2 className={styles.title}>Datos relevantes que tienes que hay que dar..</h2>

                <div className={styles.topSection}>
                    <img
                        src={uloSentado}
                        alt="Imagen principal"
                        className={styles.mainImage}
                    />
                    <ul className={styles.textList}>
                        <li>- Lorem lorem lorem lorem lorem lorem</li>
                        <li>- lorem lorem lorem lorem</li>
                        <li>- lorem lorem</li>
                        <li>- lorem lorem lorem lorem lorem lorem</li>
                    </ul>
                </div>

                <div className={styles.bottomSection}>
                    <ul className={styles.bottomList}>
                        <li>- lorem lorem lorem lorem lorem lorem</li>
                        <li>- lorem lorem lorem lorem lorem lorem</li>
                    </ul>
                    <img
                        src={uloSticker}
                        alt="Imagen secundaria"
                        className={styles.secondaryImage}
                    />
                </div>

            </div>

        </div>
    );
}
