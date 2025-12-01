import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/d0fc81b1-c1be-470a-9eab-0d5c816a034f/preview',
  plugins: [react()],
  server: {
    port: 5188,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5188,
    },
  },
})
