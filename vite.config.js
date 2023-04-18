import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs",
  },
  base: process.env.NODE_ENV === 'production' ? '/preaker81/JS-reactRPSGame/' : '/', // Set the base URL according to the environment
});
