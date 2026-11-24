# Portafolio Profesional en React - Evaluación N°4

Migración de mi portafolio de la Evaluación N°2 (HTML, CSS y JavaScript) a una SPA con React, TypeScript, Vite y React Router. Conserva la paleta, la estructura y la tipografía del original.

Captura del portafolio original: [docs/captura-e2.png](docs/captura-e2.png)

## API usada: GitHub REST API

- URL base: `https://api.github.com/users/{usuario}/repos`
- Parámetros: `sort=updated` y `per_page=6`
- Usuario configurado en `src/data/portfolioData.ts` (`GITHUB_USER`)
- Respuesta esperada (campos que uso):

```json
[
  {
    "id": 1,
    "name": "nombre-repo",
    "description": "texto o null",
    "html_url": "https://github.com/usuario/nombre-repo",
    "language": "TypeScript o null",
    "stargazers_count": 0,
    "updated_at": "2026-11-17T12:00:00Z"
  }
]
```

- Por qué la elegí: no necesita API Key y muestra mis repositorios reales, que es lo que un portafolio debería mostrar.

## Cómo ejecutarlo

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` revisa los tipos con `tsc` y genera la carpeta `dist/`. `npm run preview` sirve esa carpeta en local.

## Rutas

- `/` Inicio
- `/proyectos` Proyectos propios con filtro y repositorios de GitHub
- `/contacto` Formulario de contacto
- `*` Página 404

## Auditoría de accesibilidad

Pendiente de completar con los resultados de Google Lighthouse (Accessibility) y la prueba de navegación solo con teclado.
