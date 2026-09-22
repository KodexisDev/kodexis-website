import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// base '/' para dominio personalizado y para GitHub Pages con CNAME.
// Si despliegas solo en https://<org>.github.io/<repo>/ sin dominio,
// define VITE_BASE_PATH=/kodexis-website/ en el workflow o en .env.
const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    sourcemap: false,
    emptyOutDir: true,
  },
});
