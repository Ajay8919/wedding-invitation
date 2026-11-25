import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built assets resolve correctly whether this is
  // served from a GitHub Pages project site (username.github.io/repo/) or
  // a custom domain at the root.
  base: './',
  plugins: [react()],
})
