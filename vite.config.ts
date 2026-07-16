import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import Tailwind

export default defineConfig({
  base: '/np_landingpage/',
  plugins: [
    react(),
    tailwindcss(), // 2. Add Tailwind plugin here
  ],
})