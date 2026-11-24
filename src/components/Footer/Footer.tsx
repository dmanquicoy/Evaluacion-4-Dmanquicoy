import { perfil } from '../../data/portfolioData'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; 2026 {perfil.nombre}. Proyecto para Desarrollo de Frontend.
      </p>
    </footer>
  )
}

export default Footer
