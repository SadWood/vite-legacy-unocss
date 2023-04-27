import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({}),
    vue(),
    legacy({
      targets:
        'defaults and not dead, chrome >= 87, edge >= 88, firefox >= 78, safari >= 14',
      renderLegacyChunks: true,
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      polyfills: true,
      modernPolyfills: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
