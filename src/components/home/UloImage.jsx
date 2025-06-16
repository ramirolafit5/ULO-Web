import React from 'react';
import styles from './UloImage.module.css';

import ImagenUloSentado from '../../assets/ImagenUloSentado.png';

export default function UloImage() {
    return (
        <div className={styles.secondColumn}>
            <div className={styles.rightSecondImageContainer}>
                <img
                    src={ImagenUloSentado}
                    alt="ULO sentado"
                    className={styles.uloGiganteImg}
                />
            </div>
        </div>
    );
}
