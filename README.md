# Kodexis · Landing Trazza

Landing page de Kodexis para presentar **Trazza**, construida con React + Vite + TypeScript + Tailwind CSS.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Variables de entorno

Copia `.env.example` a `.env`:

| Variable | Descripción |
|----------|-------------|
| `VITE_CONTACT_EMAIL` | Correo de recepción PQRS |
| `VITE_WEB3FORMS_ACCESS_KEY` | (Opcional) envío PQRS por API |
| `VITE_BASE_PATH` | Base de Vite (`/` con dominio custom) |

En GitHub: **Settings → Secrets and variables → Actions**

- Variables: `VITE_CONTACT_EMAIL`, `VITE_BASE_PATH` (opcional)
- Secrets: `VITE_WEB3FORMS_ACCESS_KEY` (opcional)

## CI/CD

| Workflow | Trigger | Qué hace |
|----------|---------|----------|
| `CI` | push / PR | `npm ci`, lint, build |
| `Deploy GitHub Pages` | push a `main` | build + deploy a Pages |

### Activar GitHub Pages (una vez)

1. Repo → **Settings → Pages**
2. **Source**: GitHub Actions
3. Tras el primer deploy en `main`, la URL queda en el environment `github-pages`

### Dominio personalizado

1. En el DNS del dominio, crea:
   - `A` / `AAAA` a IPs de GitHub Pages, **o**
   - `CNAME` `www` → `kodexisdev.github.io`
2. En el repo crea `public/CNAME` con una línea: `tudominio.com`
3. En **Settings → Pages → Custom domain** escribe el mismo dominio y activa HTTPS
4. Mantén `VITE_BASE_PATH=/` (por defecto)

## Estructura

```text
src/
  components/
    layout/     # Header, Footer, Layout
    sections/   # Hero, Features, Waitlist, ProductDemo, Pqrs
    ui/         # Button, FeatureCard, ThemeToggle, Input, Select, Logo…
  contexts/     # ThemeProvider (light/dark)
  config/       # Contacto / env
  services/     # Envío PQRS
  data/         # Contenido y assets
  types/
.github/workflows/
  ci.yml
  deploy-pages.yml
```
