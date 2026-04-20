import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://maison.example',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: {
    host: true,
  },
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
