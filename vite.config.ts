import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Enable HMR with detailed logging
    middlewareMode: false,
    watch: {
      usePolling: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Better error reporting
  define: {
    __DEV__: mode === "development",
  },
  // Enable source maps in development for better debugging
  sourcemap: mode === "development" ? "inline" : false,
}));
