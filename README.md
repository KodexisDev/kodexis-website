# Kodexis · Landing Trazza

Landing page de Kodexis para presentar **Trazza** (`kodexis.co`).

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Seguridad (importante)

- **Nunca** commits de `.env`, claves, tokens ni `credentials*.json` (están en `.gitignore`).
- Solo se versiona `.env.example` con placeholders.
- En GitHub Actions:
  - **Variables** (públicas / no sensibles): `VITE_CONTACT_EMAIL`, `VITE_BASE_PATH`
  - **Secrets** (solo si usas Web3Forms): `VITE_WEB3FORMS_ACCESS_KEY`
- Las variables `VITE_*` se **incrustan en el JS del navegador**. No uses ahí passwords, tokens de API privadas ni SMTP.
- PQRS por defecto usa `mailto:` hacia el correo de contacto (sin secretos). Web3Forms es opcional y su key debe restringirse al dominio en el panel del proveedor.

## Variables locales

```bash
cp .env.example .env
```

| Variable | ¿Dónde? | Descripción |
|----------|---------|-------------|
| `VITE_CONTACT_EMAIL` | Variable Actions / `.env` | Correo PQRS (`contacto@kodexis.co`) |
| `VITE_BASE_PATH` | Variable Actions / `.env` | Debe ser `/` con dominio custom |
| `VITE_WEB3FORMS_ACCESS_KEY` | **Solo Secret** Actions | Opcional; nunca en el repo |

## Dominio: kodexis.co

Ya está preparado en el repo (`public/CNAME` + `BASE_PATH=/`).

### DNS (lo configura quien administra el dominio)

| Tipo | Host | Valor |
|------|------|--------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `kodexisdev.github.io` |

1. Primero: verificar el email del registrante si el dominio está suspendido.
2. Aplicar DNS arriba.
3. En GitHub → **Settings → Pages** → Custom domain `kodexis.co` → **Enforce HTTPS**.
4. Esperar propagación DNS (minutos a pocas horas).

URLs:
- Producción: https://kodexis.co
- Mirror GitHub: https://kodexisdev.github.io/kodexis-website/

## CI/CD

| Workflow | Trigger | Qué hace |
|----------|---------|----------|
| `CI` | push / PR | lint + build (sin secrets) |
| `Deploy GitHub Pages` | push a `main` | build + deploy |

## Estructura

```text
src/
  components/   # layout, sections, ui
  contexts/     # tema claro/oscuro
  config/       # contacto
  services/     # envío PQRS
  data/         # contenido y assets
.github/workflows/
  ci.yml
  deploy-pages.yml
public/
  CNAME         # kodexis.co
  brand/        # logos y video
```
