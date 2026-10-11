import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        // Split stable vendor code into its own chunks so returning visitors
        // only re-download the (small) app chunk after a deploy.
        advancedChunks: {
          groups: [
            { name: 'react', test: /node_modules[/\\](react|react-dom|scheduler)[/\\]/ },
            { name: 'mui', test: /node_modules[/\\](@mui|@emotion)[/\\]/ },
            { name: 'i18n', test: /node_modules[/\\](i18next|react-i18next|i18next-browser-languagedetector)[/\\]/ },
          ],
        },
      },
    },
  },
})
