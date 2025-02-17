import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/mobs': { 
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});