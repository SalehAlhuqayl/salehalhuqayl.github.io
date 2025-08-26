

// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// Allow overriding via environment for local vs GitHub Pages
const BASE_PATH = process.env.BASE_PATH || '/';
const SITE_URL = process.env.SITE_URL || 'https://salehalhuqayl.github.io/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  build: {
    assets: 'assets' // Change from default '_astro' to 'assets' to avoid GitHub Pages issues
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
