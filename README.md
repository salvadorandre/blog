# Portafolio de André Salvador

Sitio personal estático desarrollado con Astro. Presenta el perfil, proyectos, formación, habilidades y certificaciones de Platzi.

## Requisitos

- Node.js compatible con Astro 5.
- pnpm 9 (el proyecto declara su versión en `package.json`).
- El diseño usa CSS propio y no requiere un framework CSS.

## Desarrollo

```sh
pnpm install
pnpm dev
```

El servidor local está disponible normalmente en `http://localhost:4321`.

## Validaciones y publicación

```sh
pnpm build    # Ejecuta astro check y compila el sitio en dist/
pnpm test     # Compila y valida rutas, enlaces, recursos locales y certificaciones
pnpm preview  # Sirve localmente el contenido de dist/
```

La prueba automatizada verifica las rutas generadas, los enlaces y recursos locales y la presencia de las 12 certificaciones. Para la revisión visual manual, sigue [`docs/visual-qa.md`](docs/visual-qa.md).

## Estructura

```text
public/                 Recursos estáticos (fotografías, logos, iconos)
src/
├── components/          Componentes de interfaz reutilizables
├── content/projects/    Contenido Markdown de proyectos y su esquema
├── data/                Datos del perfil, estudios, tecnologías y certificados
├── layouts/             Estructura de página compartida y metadatos
├── pages/               Rutas Astro (Home, CV, portafolio, detalle y 404)
├── scripts/             Comportamiento del navegador, como revelar tarjetas al scroll
└── styles/
    ├── components/      Estilos específicos de componentes
    ├── pages/           Estilos específicos de páginas
    ├── global.css       Fondo, accesibilidad y estilos base
    └── tokens.css       Colores y medidas compartidos
tests/                   Validaciones automáticas sobre el sitio generado
docs/                    Guía de comprobación visual manual
```

## Cómo actualizar contenido

- **Perfil, experiencia, estudios y tecnologías:** editar `src/data/profile.ts`.
- **Certificaciones:** editar `src/data/certifications.ts`. Los diplomas enlazan a Platzi y sus vistas previas se cargan desde allí; el sitio muestra un fallback si la imagen no está disponible.
- **Proyectos:** añadir o editar archivos Markdown en `src/content/projects/`. Cada proyecto requiere `title`, `url`, `language`, `description` e `img`. Las imágenes referenciadas deben existir en `public/`; para una demo todavía no pública se admite `url: "#"`.
- **Estilos:** modificar tokens compartidos en `src/styles/tokens.css`; poner reglas generales en `global.css`, estilos de página en `styles/pages/` y reglas de componente en `styles/components/`.

## Convenciones

- Mantener el contenido separado del marcado y de los estilos.
- Preferir selectores acotados a la página o componente para evitar efectos colaterales.
- Usar imágenes con texto alternativo significativo cuando comuniquen contenido; dejar `alt=""` cuando sean decorativas.
- Respetar `prefers-reduced-motion` al añadir animaciones.
- No guardar credenciales privadas ni tokens en archivos públicos del sitio.
- Mantener el CSS nativo organizado por componente y página, usando `tokens.css` para valores compartidos.
