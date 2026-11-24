import './ProjectFilter.css'

interface ProjectFilterProps {
  opciones: string[]
  seleccionada: string
  onSeleccionar: (opcion: string) => void
}

function ProjectFilter({ opciones, seleccionada, onSeleccionar }: ProjectFilterProps) {
  return (
    <div className="project-filter" role="group" aria-label="Filtrar proyectos por tecnología">
      {opciones.map((opcion) => (
        <button
          key={opcion}
          type="button"
          aria-pressed={seleccionada === opcion}
          className={
            seleccionada === opcion
              ? 'project-filter__button project-filter__button--active'
              : 'project-filter__button'
          }
          onClick={() => onSeleccionar(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  )
}

export default ProjectFilter
