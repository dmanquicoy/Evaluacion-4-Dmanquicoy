Declaracion uso de IA

- IA: Gemini
- Modelo: Hidrógen
- Esfuerzo: Alto 

Mensaje Enviado: como coloco una api de github a un portafolio echo en react?
estas son las indicaciones que me dieron, como lo ago explícame no me explayes tanto en código ni comentarios se preciso 

adjunte: Requerimientos_Proyecto-React_Evaluacion_4_ICINF1107.pdf

Respuesta:

Te explico lo esencial, siguiendo lo que pide la pauta (Alternativa A, GitHub REST API).

## Idea general

Haces un `fetch` a `https://api.github.com/users/TU_USUARIO/repos?sort=updated&per_page=6`, guardas la respuesta en estado (cargando / datos / error) y la dibujas como tarjetas. Todo eso lo encapsulas en un hook reutilizable.

## Pasos

**1. Tipos** (`src/types/index.ts`): copia la interfaz `GitHubRepo` que viene en la pauta.

**2. Hook** (`src/hooks/useFetchApi.ts`): copia el que trae la pauta. Ya incluye los tres estados y el `AbortController`, que es lo que piden. Lo único pendiente es el `TODO` del mensaje de error: cambia `err.message` por algo amigable, por ejemplo "No se pudo conectar con GitHub".

**3. Usarlo en la página** (`src/pages/ProjectsPage.tsx`):

```tsx
const API_URL = 'https://api.github.com/users/TU_USUARIO/repos?sort=updated&per_page=6';
const { data: repos, loading, error } = useFetchApi<GitHubRepo[]>(API_URL);
```

Reemplaza `octocat` por tu usuario real de GitHub.

**4. Completar el TODO de la tarjeta**, dentro del `<article>`:

```tsx
<p className="project-card__meta">
  {repo.language ?? 'Sin lenguaje'} · ⭐ {repo.stargazers_count}
</p>
<a className="project-card__link" href={repo.html_url}
   target="_blank" rel="noopener noreferrer">
  Ver código
</a>
```

**5. Ruta**: en `App.tsx` registra `ProjectsPage` en `<Route path="/proyectos" ... />` y agrega su `NavLink` en el Navbar.

## Cosas que la pauta evalúa y debes cuidar

- **Sin `any`**: todo tipado con `GitHubRepo`.
- **Tres estados visibles**: cargando, error y éxito (la plantilla ya los trae con `role="status"` y `role="alert"`).
- **Clases BEM**: `project-card`, `project-card__title`, etc.
- **Solo repos públicos**: si no ves tus repos, revisa que tu usuario esté bien escrito y que sean públicos.
- **Límite de la API**: sin autenticación GitHub permite unas 60 peticiones por hora por IP. Si falla con error 403 mientras pruebas, es eso; espera un rato.

## Para documentar (README y uso_ia.md)

En el README describe la URL base, los parámetros (`sort`, `per_page`), los campos JSON que usas y por qué elegiste esta API. En `uso_ia.md` registra honestamente cómo usaste IA, porque eso se evalúa junto con el cuestionario donde tendrás que explicar el código sin ayuda.

Si quieres, te explico en detalle cómo funciona el `AbortController` o el `useEffect` del hook, que es justo lo que suelen preguntar en el cuestionario.