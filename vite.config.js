import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures assets load from root (critical for static hosting)
  build: {
    outDir: 'dist', // Output folder for production build
    emptyOutDir: true, // Clears the 'dist' folder on each build
  },
});