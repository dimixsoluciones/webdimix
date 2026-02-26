import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL de tu sitio para generar el sitemap correctamente
  site: 'https://dimixsoluciones.com',
  
  // Integraciones
  integrations: [
    icon(),
    sitemap()
  ],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
  },
});