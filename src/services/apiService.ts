export const urlReposGitHub = (usuario: string): string =>
  `https://api.github.com/users/${usuario}/repos?sort=updated&per_page=6`

export const mensajePorEstado = (estado: number): string => {
  if (estado === 404) return 'No se encontró el usuario de GitHub.'
  if (estado === 403) return 'GitHub alcanzó el límite de consultas, intenta de nuevo más tarde.'
  return `El servidor respondió con un error (${estado}).`
}
