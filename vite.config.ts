import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/',
  server: {
    host: '0.0.0.0',
    allowedHosts: ['sea-turtle-app-pbb5x.ondigitalocean.app']
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: [
      'sea-turtle-app-pbb5x.ondigitalocean.app',
      'ridhofahrizal.life',
      'www.ridhofahrizal.life',
    ]
  }
})



