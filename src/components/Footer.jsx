import '../styles/footer.css'
import LogoULO from '../assets/LogoULO.png'
import FacebookIcon from '../assets/FacebookBlanco.png'
import WhatsappIcon from '../assets/WhatsappBlanco.png'
import InstagramIcon from '../assets/InstagramBlanco.png'
import GmailIcon from '../assets/GmailBlanco.png'

export default function Footer() {
    return (
        <>
            <footer class="modern-footer">
                <div class="footer-container">
                    <div class="logo-section">
                        <img src={LogoULO} alt="Logo de la página" class="footer-logo" />
                    </div>
                    <nav class="footer-links">
                        <a href="#">Contacto</a>
                        <a href="#">Tienda</a>
                        <a href="#">Blog</a>
                    </nav>
                    <div class="footer-social">
                        <a href="#">
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>

                        <a href="#">
                            <img src={WhatsappIcon} alt="Whatssapp" />
                        </a>

                        <a href="#">
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>

                        <a href="#">
                            <img src={GmailIcon} alt="Gmail" />
                        </a>
                    </div>
                </div>
                <p class="footer-copy">© 2025 ULO. Todos los derechos reservados.</p>
            </footer>
        </>
    )

}
