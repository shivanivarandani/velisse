import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VÉLISSE — configured for GitHub Pages project-site deployment at
// https://<user>.github.io/velisse/
export default defineConfig({
  plugins: [react()],
  base: '/velisse/',
})
