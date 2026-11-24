import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="section" aria-labelledby="titulo-404">
      <h1 id="titulo-404">Página no encontrada</h1>
      <p className="section__intro">La dirección que buscas no existe o fue movida.</p>
      <Link to="/" className="btn btn--small">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage
