import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

// @astrojs/react enables the React island used on the index page
// (<Counter client:load />) so the CSS-class layer and the real React
// component layer can be verified side by side.
export default defineConfig({
  integrations: [react()],
})
