import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // This is necessary for GitHub Pages
  server: {
    host: "localhost",
    port: 8080,
  },
});
