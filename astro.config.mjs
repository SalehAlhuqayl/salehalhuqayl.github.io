

// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://salehalhuqayl.github.io',
  // No base needed if repository name is salehalhuqayl.github.io
  // If repository is still Portfolio-2, uncomment the line below:
  // base: '/Portfolio-2',
  build: {
    assets: 'assets' // Change from default '_astro' to 'assets' to avoid GitHub Pages issues
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
