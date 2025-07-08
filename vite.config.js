// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // IMPORTANT: bind to 0.0.0.0
    port: 5173, // your port
    allowedHosts: [
      '0a4f45087493.ngrok-free.app'
    ]
  }
})
