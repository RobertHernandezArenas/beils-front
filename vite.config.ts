import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
<<<<<<< HEAD
import VueDevTools from 'vite-plugin-vue-devtools'
=======
import vueJsx from '@vitejs/plugin-vue-jsx'
>>>>>>> 40febaa488bc06af23898befa6e37997d951c57b

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
<<<<<<< HEAD
    VueDevTools(),
=======
    vueJsx(),
>>>>>>> 40febaa488bc06af23898befa6e37997d951c57b
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
