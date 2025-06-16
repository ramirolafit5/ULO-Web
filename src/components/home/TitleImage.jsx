import { motion } from 'framer-motion';
import styles from './TitleImage.module.css';

import JuegoConSentidosLargo from '../../assets/JuegoConSentidosLargo.png';
import JuegoConSentidosCorto from '../../assets/JuegoConSentidosCorto.png';

export default function TitleImage() {
    return (
        <div className={styles.topImageTitle}>
            <motion.div
                className={styles.topImageTitleLarge}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <img
                    src={JuegoConSentidosLargo}
                    alt="Juego con Sentidos"
                    className={styles.topSectionImage}
                />
            </motion.div>

            <motion.div
                className={styles.topImageTitleShort}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <img
                    src={JuegoConSentidosCorto}
                    alt="Juego con Sentidos Móvil"
                    className={styles.topMobileSectionImage}
                />
            </motion.div>
        </div>
    );
}
