import fotoPerfil from '../assets/mi-foto.jpg'
import proyecto1 from '../assets/proyecto1.png'
import proyecto2 from '../assets/proyecto2.png'
import type { Perfil, ProjectItem } from '../types'

export const GITHUB_USER = 'dmanquicoy'

export const perfil: Perfil = {
  nombre: 'Diego Manquicoy',
  carrera: 'Estudiante de Ingeniería Civil Informática en la UCT',
  presentacion:
    'Entré a esta carrera porque me gusta la tecnología y los computadores, así que decidí estudiar para aprender sobre el desarrollo de páginas web, aplicaciones y ciberseguridad.',
  foto: fotoPerfil,
  fotoAlt: 'Foto de Diego Manquicoy, estudiante de informática',
}

export const proyectos: ProjectItem[] = [
  {
    id: 1,
    titulo: 'Página para dar a conocer los cuidados de los perros Dachshund',
    descripcion:
      'Desarrollada en clases por instrucción del profesor para aprender y practicar la creación de páginas web.',
    tecnologias: ['HTML', 'CSS'],
    urlRepo: 'https://diegomanquecoy6-maker.github.io/info-dashunds/',
    imagen: proyecto1,
    imagenAlt: 'Captura de pantalla de la interfaz de la página web',
  },
  {
    id: 2,
    titulo: 'Página de cálculo de notas',
    descripcion:
      'Esta página fue creada para facilitar el cálculo de promedios de los ramos.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    urlRepo: 'https://diegomanquecoy6-maker.github.io/CalcularNotas/',
    imagen: proyecto2,
    imagenAlt: 'Captura de la página de cálculo de promedios',
  },
]
