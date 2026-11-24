import { useState } from 'react'
import { useFetchApi } from '../hooks/useFetchApi'
import { urlReposGitHub } from '../services/apiService'
import { GITHUB_USER, proyectos } from '../data/portfolioData'
import type { GitHubRepo } from '../types'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ProjectFilter from '../components/ProjectFilter/ProjectFilter'
import RepoCard from '../components/RepoCard/RepoCard'
import StatusMessage from '../components/StatusMessage/StatusMessage'

const TODOS = 'Todos'

const tecnologias: string[] = [
  TODOS,
  ...Array.from(new Set(proyectos.flatMap((p) => p.tecnologias))),
]

function ProjectsPage() {
  const [filtro, setFiltro] = useState<string>(TODOS)
  const { data: repos, loading, error } = useFetchApi<GitHubRepo[]>(urlReposGitHub(GITHUB_USER))

  const proyectosVisibles =
    filtro === TODOS ? proyectos : proyectos.filter((p) => p.tecnologias.includes(filtro))

  return (
    <>
      <section className="section" aria-labelledby="titulo-trabajos">
        <h1 id="titulo-trabajos">Mis Trabajos del Semestre</h1>
        <ProjectFilter opciones={tecnologias} seleccionada={filtro} onSeleccionar={setFiltro} />
        <div className="cards-grid">
          {proyectosVisibles.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="titulo-repos">
        <h2 id="titulo-repos">Mis repositorios en GitHub</h2>
        <p className="section__intro">Mis últimos repositorios públicos, traídos desde la API de GitHub.</p>

        {loading && <StatusMessage tipo="cargando" mensaje="Cargando repositorios..." />}
        {error && <StatusMessage tipo="error" mensaje={error} />}
        {!loading && !error && repos && repos.length === 0 && (
          <StatusMessage tipo="cargando" mensaje="Todavía no hay repositorios públicos para mostrar." />
        )}
        {!loading && !error && repos && repos.length > 0 && (
          <div className="cards-grid">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default ProjectsPage
