import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
let path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  define: {
    'process.env': {}
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, 'src') }
    ]
  }
})
