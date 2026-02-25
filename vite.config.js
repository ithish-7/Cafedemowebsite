// vite.config.js
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // The 'base' should match your GitHub repository name if deploying to a subpath,
  // e.g., 'https://<USERNAME>.github.io/<REPO>/'
  // If deploying to a custom domain or a user site (https://<USERNAME>.github.io/), leave as '/'
  // We'll use a relative base './' to make it work reliably in most generic folder structures.
  base: './', 
})
