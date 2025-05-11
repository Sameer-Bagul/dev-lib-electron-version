import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import rawPlugin from 'vite-plugin-raw';

export default defineConfig({
  plugins: [
    react(),
    rawPlugin({
      include: ['**/*.md']
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});