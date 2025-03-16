import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/Portfolio/',  
=======
  base: '/Portfolio/',  // Add this line to set the base path for GitHub Pages
>>>>>>> 93723849b9ffdd61e428837b4edbc80b0f6d4cf2
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
