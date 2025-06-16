// Presentation.jsx (o .tsx)
import { motion } from 'framer-motion';
import styles from './Presentation.module.css'; // Asegúrate de que este sea el nombre correcto
import ShowUlo from './ShowUlo';
import ShowUlo2 from './ShowUlo2';

export default function Presentation() {
    // Variantes para animar la entrada de los elementos
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Retraso entre la aparición de cada hijo
                delayChildren: 0.3 // Retraso antes de que el primer hijo empiece
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring", // Animación tipo muelle
                damping: 10, // Fuerza del muelle
                stiffness: 100 // Rigidez del muelle
            }
        }
    };

    return (
        <motion.div
            className={styles.columnsWrapper}
            initial="hidden"
            animate="visible"
            variants={containerVariants} // Aplica las variantes al contenedor principal
        >
            <motion.div className={styles.mainTextContent}>
                <motion.p className={styles.mainHeading} variants={itemVariants}>
                    Conocé ULO.
                </motion.p>
                <motion.p className={styles.introParagraph} variants={itemVariants}>
                    En "ULO", creemos que aprender puede ser simple y divertido.
                    Diseñamos experiencias educativas con muñecos, naipes y animales creados con
                    letras, para acompañar a los peques en su desarrollo.
                </motion.p>
                <motion.ul className={styles.highlightList} variants={containerVariants}> {/* Re-usamos containerVariants para stagger */}
                    <motion.li className={styles.highlightItem} variants={itemVariants}>
                        + Creatividad
                    </motion.li>
                    <motion.li className={styles.highlightItem} variants={itemVariants}>
                        + Inclusión
                    </motion.li>
                    <motion.li className={styles.highlightItem} variants={itemVariants}>
                        + Cultura lúdica
                    </motion.li>
                </motion.ul>
            </motion.div>
            {/* <motion.div>
                <ShowUlo2 />
            </motion.div> */}
        </motion.div>
    );
}