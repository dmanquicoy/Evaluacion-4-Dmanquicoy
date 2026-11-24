import type { GitHubRepo } from '../../types'
import './RepoCard.css'

interface RepoCardProps {
  repo: GitHubRepo
}

function RepoCard({ repo }: RepoCardProps) {
  return (
    <article className="repo-card">
      <h3 className="repo-card__title">{repo.name}</h3>
      <p className="repo-card__description">
        {repo.description ?? 'Sin descripción en el repositorio.'}
      </p>
      <p className="repo-card__meta">
        <span className="repo-card__language">{repo.language ?? 'Sin lenguaje'}</span>
        <span className="repo-card__stars" aria-label={`${repo.stargazers_count} estrellas`}>
          ★ {repo.stargazers_count}
        </span>
      </p>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--small"
      >
        Ver código
      </a>
    </article>
  )
}

export default RepoCard
