import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 MUY IMPORTANTE: base debe ser el nombre del repo en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/26_09_2025_recordando_b/', 
})