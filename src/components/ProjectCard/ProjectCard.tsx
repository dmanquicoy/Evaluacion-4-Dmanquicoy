import type { ProjectItem } from '../../types'
import './ProjectCard.css'

interface ProjectCardProps {
  proyecto: ProjectItem
}

function ProjectCard({ proyecto }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={proyecto.imagen}
        alt={proyecto.imagenAlt}
      />
      <h3 className="project-card__title">{proyecto.titulo}</h3>
      <p className="project-card__description">{proyecto.descripcion}</p>
      <ul className="project-card__tags" aria-label="Tecnologías usadas">
        {proyecto.tecnologias.map((tecnologia) => (
          <li key={tecnologia} className="project-card__tag">
            {tecnologia}
          </li>
        ))}
      </ul>
      <a
        href={proyecto.urlRepo}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--small"
      >
        Ver en GitHub
      </a>
    </article>
  )
}

export default ProjectCard
