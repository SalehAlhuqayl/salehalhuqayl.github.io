

// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://salehalhuqayl.github.io',
  base: '/Portfolio-2/',
  vite: {
    plugins: [tailwindcss()]
  }
})
