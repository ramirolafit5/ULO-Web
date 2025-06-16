import styles from '../styles/aboutus.module.css';

export default function AboutUsView() {
    return (
        <section className={styles.about}>
            <h2 className={styles.title}>Conocé ULO</h2>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>
                        En ULO creemos que aprender puede ser divertido. Diseñamos experiencias educativas con muñecos, cartas y más de 60 animales para acompañar a chicos y chicas en su desarrollo.
                    </p>
                    <ul className={styles.values}>
                        <li>💡 Creatividad</li>
                        <li>🤝 Inclusión</li>
                        <li>🌱 Aprendizaje lúdico</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
