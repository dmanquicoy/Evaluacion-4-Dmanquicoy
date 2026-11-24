# Inventario de migración E2 a React

## Secciones recuperadas

| E2 (index.html) | React |
| --- | --- |
| header con logo y nav | `components/Navbar/Navbar.tsx` |
| section Sobre mí (hero) | `pages/HomePage.tsx` |
| section Proyectos y tarjetas | `pages/ProjectsPage.tsx` y `components/ProjectCard/ProjectCard.tsx` |
| section Contacto y formulario | `pages/ContactPage.tsx` y `components/ContactForm/ContactForm.tsx` |
| footer | `components/Footer/Footer.tsx` |

## Estilos

- `styles.css` se separó en `src/index.css` (variables, reset y base) y un `.css` por componente.
- Las variables `--color-fondo`, `--color-texto`, `--color-primario`, `--color-acento` y `--color-foco` se mantuvieron con los mismos valores.
- Todos los selectores pasaron a BEM (`.hero__title`, `.project-card__image`, `.navbar__link--active`, etc.).

## Scripts

- Menú hamburguesa, cambio de tema, filtro de proyectos y validación del formulario ahora funcionan con estado de React (`useState` y `ThemeContext`).

## Mejoras respecto a E2

- Los enlaces con `#` ahora son rutas con `NavLink`, y existe una ruta 404.
- Se corrigió la `|` suelta después del `</footer>` y los errores de ortografía de los textos.
- `:focus` pasó a `:focus-visible`.
- El formulario muestra errores por campo con `aria-describedby` y un mensaje de confirmación con `aria-live`.
- Se agregaron proyectos desde la API de GitHub con estados de carga y error.
