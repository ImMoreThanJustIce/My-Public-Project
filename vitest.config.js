import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Permet d'accèder aux variables globales
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'test/setup.js')],
    /* env: {
      IS_REACT_ACT_ENVIRONMENT: 'true'
    } */
    include: ['src/**/*.spec.jsx'],
  },
})
