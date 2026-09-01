import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    imagetools({
      // Import any image with `?opt` to get responsive AVIF + WebP,
      // capped at 1280px (source files are print-res). WebP is the
      // fallback: universally supported, keeps alpha, no multi-MB PNGs.
      defaultDirectives: (url) => {
        if (url.searchParams.has("opt")) {
          return new URLSearchParams({
            format: "avif;webp",
            w: "320;640;960;1280",
            quality: "72",
            withoutEnlargement: "true",
            as: "picture",
          });
        }
        return new URLSearchParams();
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-avatar", "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          motion: ["framer-motion"],
          router: ["react-router-dom"],
          query: ["@tanstack/react-query"],
        },
      },
    },
  },
});
