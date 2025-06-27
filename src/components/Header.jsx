import { useState, useRef, useEffect } from 'react'
import '../styles/header.css'
import LogoULO from '../assets/LogoULO.webp'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(event.target)
      const clickedOutsideButton = buttonRef.current && !buttonRef.current.contains(event.target)

      if (isMenuOpen && clickedOutsideMenu && clickedOutsideButton) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Cierra el menú si se hace clic en un link del menú
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="main-header">
      <a href="/">
        <div className="header-logo-container">
          <img src={LogoULO} alt="Logo ULO" className="header-logo" />
        </div>
      </a>

      <nav className="main-nav">
        <button
          ref={buttonRef}
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`nav-list ${isMenuOpen ? 'active' : ''}`}
          ref={menuRef}
        >
          <li className="nav-item"><a href="/" onClick={handleLinkClick}>Inicio</a></li>
          <li className="nav-item"><a href="/animales" onClick={handleLinkClick}>Animales</a></li>
          <li className="nav-item"><a href="/juegos" onClick={handleLinkClick}>Juegos</a></li>
          <li className="nav-item"><a href="/experiencias" onClick={handleLinkClick}>Experiencias</a></li>
          <li className="nav-item"><a href="/sobrenosotros" onClick={handleLinkClick}>Sobre Nosotros</a></li>
          <li className="nav-item">
            <a
              href="https://uliversoar.mitiendanube.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Tienda
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
