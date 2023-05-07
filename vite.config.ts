import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    legacy({
      targets:
        'defaults, chrome >= 73, edge >= 79, firefox >= 64, safari >= 13',
      modernPolyfills: true,
      renderLegacyChunks: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
