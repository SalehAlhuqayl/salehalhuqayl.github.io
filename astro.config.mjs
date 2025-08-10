

// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// Allow overriding via environment for local vs GitHub Pages
const BASE_PATH = process.env.BASE_PATH || '/Portfolio-2/';
const SITE_URL = process.env.SITE_URL || 'https://salehalhuqayl.github.io/Portfolio-2/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  vite: {
    plugins: [tailwindcss()]
  }
})
