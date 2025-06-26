import '../styles/footer.css'
import LogoULO from '../assets/LogoULO.webp'
import FacebookIcon from '../assets/iconos/FacebookBlanco.png'
import WhatsappIcon from '../assets/iconos/WhatsappBlanco.png'
import InstagramIcon from '../assets/iconos/InstagramBlanco.png'
import GmailIcon from '../assets/iconos/GmailBlanco.png'

export default function Footer() {
    return (
        <>
            <footer class="modern-footer">
                <div class="footer-container">
                    <div class="logo-section">
                        <img src={LogoULO} alt="Logo de la página" class="footer-logo" />
                    </div>
                    <nav class="footer-links">
                        <a
                            href="https://wa.me/5492364699034?text=Hola%2C%20quiero%20más%20información"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contacto
                        </a>
                        <a href="https://uliversoar.mitiendanube.com/" target="_blank" rel="noopener noreferrer">Tienda</a>
                        <a href="#">Blog</a>
                    </nav>
                    <div class="footer-social">
                        <a
                            href="https://www.facebook.com/profile.php?id=61571754564242"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>

                        <a
                            href="https://wa.me/5492364699034?text=Hola%2C%20quiero%20más%20información"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={WhatsappIcon} alt="WhatsApp" />
                        </a>


                        <a
                            href="https://www.instagram.com/uliverso.ar?igsh=MXZhOGRtd2JnMXd4YQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>

                        <a
                            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=uloulo00321@gmail.com&su=Consulta%20desde%20la%20web&body=Hola%2C%20me%20gustaría%20saber%20más%20sobre%20ULO"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={GmailIcon} alt="Gmail" />
                        </a>
                    </div>
                </div>
                <p class="footer-copy">© 2025 ULO. Todos los derechos reservados.</p>
            </footer>
        </>
    )

}
