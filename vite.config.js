import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
  base: '/portfolio/',   // ← название твоего репозитория
  resolve: {
    alias: {
      "@": path.relative(__dirname, "./src")
    }
  }
})