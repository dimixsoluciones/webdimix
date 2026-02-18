import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'; // <--- 1. Importamos la integración

// https://astro.build/config
export default defineConfig({
  // 2. Añadimos la integración aquí
  integrations: [icon()],

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