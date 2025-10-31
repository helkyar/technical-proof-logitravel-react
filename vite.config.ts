// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tsconfigPaths from 'vite-tsconfig-paths'
// // import path from 'path'

// // https://vite.dev/config/
// export default defineConfig({
//   // resolve: {
//   //   alias: {
//   //     '@': path.resolve(__dirname, './src'),
//   //     '@hooks': path.resolve(__dirname, './src/hooks') 
//   //   },
//   // },
//   plugins: [react(),tsconfigPaths()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      hooks: "/src/hooks",
      modules: "/src/modules",
      data: "/src/data",
    },
  },
});