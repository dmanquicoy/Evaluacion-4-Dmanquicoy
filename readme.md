Portafolio web personal - Diego Manquicoy

Aplicacion web tipo SPA desarrollada con React, TypeScript y Vite como proyecto de
la Evaluacion 4 de Desarrollo Fronted

El sitio presenta mi perfil profesional, Un formulario de contacto accesible y la carga dinamica de mis repositorios publicos desde Github.

Captura del portafolio original: [docs/captura-portafolio.png](docs/captura-portafolio.png)


Caracteristicas Principales: 

- Navegación multi-vista: Enrutamiento con `react-router-dom` (`/`, `/proyectos`, `/contacto` y página `404` para rutas no encontradas).

- Tema Claro / Oscuro: Cambio dinámico de paleta mediante `ThemeContext` y persistencia en `localStorage`.

- Filtro de proyectos: Clasificación interactiva de proyectos académicos por tecnología (`Todos`, `HTML`, `CSS`, `JavaScript`).

- Consumo de API externa: Listado automático de los últimos repositorios públicos desde GitHub con estados de carga y manejo de errores.

- Formulario validado y accesible: Validación en tiempo real por campo con atributos `aria-invalid`, `aria-describedby` y mensajes de estado con `aria-live`.

- Arquitectura CSS BEM: Estilos modulares por componente utilizando variables CSS y enfoque *mobile-first*.


API utilizada: GitHub REST API

Para mostrar dinámicamente los repositorios en la sección de Proyectos, el proyecto consume la API pública REST de GitHub (no requiere token de autenticación):

- Endpoint:
  ```http
  GET [https://api.github.com/users/dmanquicoy/repos?sort=updated&per_page=6](https://api.github.com/users/dmanquicoy/repos?sort=updated&per_page=6)


Ubicación en el código:

- src/services/apiService.ts: Construcción de la URL y mapeo de mensajes de error HTTP (404 usuario no encontrado, 403 límite de peticiones alcanzado).

- src/hooks/useFetchApi.ts: Hook personalizado que gestiona la petición fetch, cancelación con AbortController y los estados loading, data y error.

- src/data/portfolioData.ts: Configuración del usuario (GITHUB_USER = 'dmanquicoy').

- Datos obtenidos: Nombre del repositorio, descripción, lenguaje principal, cantidad de estrellas (★) y enlace directo al código fuente.


Tecnologías utilizadas:

- React 18 + TypeScript

- Vite 5 (entorno de desarrollo y empaquetado)

- React Router DOM v6 (gestión de rutas)

- CSS3 (metodología BEM y Custom Properties)

Estructura del proyecto:

```text
Evaluacion-4-Dmanquicoy/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── assets/          # Imágenes de perfil y capturas de proyectos
    ├── components/      # Navbar, Footer, ProjectCard, ProjectFilter, RepoCard, ContactForm, StatusMessage
    ├── context/         # ThemeContext (modo claro/oscuro)
    ├── data/            # Datos del perfil, proyectos estáticos y usuario de GitHub
    ├── hooks/           # Hook reutilizable useFetchApi
    ├── pages/           # HomePage, ProjectsPage, ContactPage, NotFoundPage
    ├── services/        # Configuración y manejo de errores de la API de GitHub
    ├── types/           # Interfaces y tipos de TypeScript
    ├── App.tsx          # Definición de rutas principales
    ├── index.css        # Variables globales y estilos base
    └── main.tsx         # Punto de entrada de la aplicación
```

Instalación y Ejecución:

```bash
git clone https://github.com/dmanquicoy/Evaluacion-4-Dmanquicoy.git
cd Evaluacion-4-Dmanquicoy
npm install
npm run dev
```

Luego abre el navegador en
http://localhost:5173
