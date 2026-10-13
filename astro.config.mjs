// @ts-check
import { defineConfig } from 'astro/config';

// Cambiar si el dominio final es otro (se usa para canonical y Open Graph).
export default defineConfig({
  site: 'https://ecodur.com.ar',
  trailingSlash: 'ignore',
  build: {
    // Genera /empresa/index.html → la URL queda ecodur.com.ar/empresa
    format: 'directory',
  },
});
