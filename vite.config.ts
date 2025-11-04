import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, // activa las globals estilo Jest (test, expect, etc.)
    setupFiles: './src/setupTests.ts',
    css: true,
    alias: {
      '@': '/src',
    },
  },
  resolve: {
    alias: {
      hooks: "/src/hooks",
      modules: "/src/modules",
      data: "/src/data",
    }, 
  },
});