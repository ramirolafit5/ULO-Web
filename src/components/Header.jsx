import { useState } from 'react'
import '../styles/header.css'
import LogoULO from '../assets/LogoULO.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
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
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="/">Inicio</a></li>
          <li className="nav-item"><a href="/animales">Animales</a></li>
          <li className="nav-item"><a href="/juegos">Juegos</a></li>
          <li className="nav-item"><a href="/experiencias">Experiencias</a></li>
          <li className="nav-item"><a href="/sobrenosotros">Sobre Nosotros</a></li>
          <li className="nav-item"><a href="https://uliversoar.mitiendanube.com/" target="_blank" rel="noopener noreferrer">Tienda</a></li>
        </ul>
      </nav>
    </header>
  )
}
