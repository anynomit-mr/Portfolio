import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  // Add this line to set the base path for GitHub Pages
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
