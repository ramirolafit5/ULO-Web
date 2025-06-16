import React from 'react';
import styles from './UloPoem.module.css';

import ImagenInternetSosteniendo from '../../assets/imageninternetprueba.jpg';

export default function UloPoem() {
    return (
        <div className={styles.thirdColumn}>
            <div className={styles.thirdColumnContainer}>
                <div className={styles.songTextContainer}>
                    <p className={styles.songText}>
                        Será que soy muñeco,<br />
                        porque soy encantador<br />
                        o será... será... será...,<br />
                        por mi puro corazón.<br /><br />

                        ULO me llamo.<br />
                        Se nota en la cara.<br />
                        ULO me dicen.<br />
                        Ese soy yo.<br /><br />

                        Cuerpo inquieto.<br />
                        Soñador...<br />
                        Cabeza, cabezota, cabezón.
                    </p>
                </div>
                <div className={styles.thirdColumnImage}>
                    <img src={ImagenInternetSosteniendo} alt="ULO sosteniendo algo" />
                </div>
            </div>
        </div>
    );
}
