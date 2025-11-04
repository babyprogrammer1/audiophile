import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Serve and build using relative paths so deployed static assets work
  // correctly when the site is served from different hosts or rewritten
  // routes (helps avoid blank pages caused by absolute `/assets/...` URLs).
  base: './',
  server: {
    host: "::",
    port: 8080,
    fs: {
      // Allow Vite to serve files from the project root (index.html) in addition
      // to the source and shared folders. Use absolute paths to avoid issues on
      // Windows and other platforms.
      allow: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "shared"),
        path.resolve(__dirname),
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}
