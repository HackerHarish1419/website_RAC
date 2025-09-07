import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '851fac7b77c6.ngrok-free.app',
      '.ngrok-free.app',
      '.ngrok.io'
    ],
    host: true
  }
})
