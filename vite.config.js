import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://painting-api-w9q1.onrender.com/'
    }
  },
  plugins: [react()],
})
