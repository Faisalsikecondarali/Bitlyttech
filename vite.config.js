import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2018',  // ← add ye line, optional chaining fix ke liye
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Performance optimizations
    cssCodeSplit: true,
    reportCompressedSize: false,
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  // Performance: Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
