import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
        proxy: {
          '/students': 'http://localhost:3000',
          '/student': 'http://localhost:3000' // Replace 5000 with your Express server's port
        },
      },
})
