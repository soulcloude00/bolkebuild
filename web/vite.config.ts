import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works under /bolkebuild/ on GitHub Pages.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: { onboarding: "onboarding.html" },
    },
  },
});
