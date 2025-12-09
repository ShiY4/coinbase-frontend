import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      components: path.resolve(__dirname, 'src', 'components'),
      routes: path.resolve(__dirname, 'src', 'routes'),
      layouts: path.resolve(__dirname, 'src', 'layouts'),
      store: path.resolve(__dirname, 'src', 'store'),
      hooks: path.resolve(__dirname, 'src', 'hooks'),
      pages: path.resolve(__dirname, 'src', 'pages'),
      api: path.resolve(__dirname, 'src', 'api'),
    },
  },
  plugins: [eslint({ failOnWarning: false }), svgr(), react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
