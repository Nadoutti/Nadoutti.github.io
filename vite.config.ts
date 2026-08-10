import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // User site (Nadoutti.github.io) is served from the domain root.
  base: '/',
  plugins: [react(), tailwindcss()],
})
