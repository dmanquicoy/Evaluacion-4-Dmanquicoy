export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  updated_at: string
}

export interface ProjectItem {
  id: number
  titulo: string
  descripcion: string
  tecnologias: string[]
  urlRepo: string
  imagen: string
  imagenAlt: string
}

export interface Perfil {
  nombre: string
  carrera: string
  presentacion: string
  foto: string
  fotoAlt: string
}

export interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export type Tema = 'claro' | 'oscuro'

export interface ThemeContextValue {
  tema: Tema
  cambiarTema: () => void
}

export interface ContactValues {
  nombre: string
  email: string
  mensaje: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

export type StatusKind = 'cargando' | 'error'
