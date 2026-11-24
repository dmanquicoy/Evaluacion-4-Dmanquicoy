import { Link } from 'react-router-dom'
import { perfil } from '../data/portfolioData'
import './HomePage.css'

function HomePage() {
  return (
    <section className="section hero">
      <div className="hero__text">
        <h1 className="hero__title">Hola, soy {perfil.nombre}</h1>
        <h2 className="hero__subtitle">{perfil.carrera}</h2>
        <p className="hero__description">{perfil.presentacion}</p>
        <Link to="/proyectos" className="btn btn--small">
          Ver mis proyectos
        </Link>
      </div>
      <img className="hero__image" src={perfil.foto} alt={perfil.fotoAlt} />
    </section>
  )
}

export default HomePage
