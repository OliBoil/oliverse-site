import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oliverse.qd.je',
  output: 'static',
  vite: {
    preview: {
      allowedHosts: ['openclaw-server.tail3006a7.ts.net'],
    },
  },
});
