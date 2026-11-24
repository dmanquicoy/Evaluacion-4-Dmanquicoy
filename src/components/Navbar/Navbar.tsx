import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import './Navbar.css'

const enlaces = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/proyectos', texto: 'Proyectos' },
  { ruta: '/contacto', texto: 'Contacto' },
]

function Navbar() {
  const [abierto, setAbierto] = useState<boolean>(false)
  const { tema, cambiarTema } = useTheme()

  const claseEnlace = ({ isActive }: { isActive: boolean }): string =>
    isActive ? 'navbar__link navbar__link--active' : 'navbar__link'

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo" onClick={() => setAbierto(false)}>
        MiPortafolio
      </NavLink>

      <button
        type="button"
        className="navbar__toggle"
        aria-expanded={abierto}
        aria-controls="menu-principal"
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? '✕' : '☰'}
      </button>

      <nav
        id="menu-principal"
        aria-label="Navegación principal"
        className={abierto ? 'navbar__menu navbar__menu--open' : 'navbar__menu'}
      >
        <ul className="navbar__list">
          {enlaces.map((enlace) => (
            <li key={enlace.ruta}>
              <NavLink
                to={enlace.ruta}
                end={enlace.ruta === '/'}
                className={claseEnlace}
                onClick={() => setAbierto(false)}
              >
                {enlace.texto}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="navbar__theme"
              aria-pressed={tema === 'oscuro'}
              onClick={cambiarTema}
            >
              {tema === 'claro' ? 'Modo oscuro' : 'Modo claro'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
