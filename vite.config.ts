import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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



