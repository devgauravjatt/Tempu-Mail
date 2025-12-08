import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      optimize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }
            if (id.includes("react-router")) {
              return "router";
            }
            if (id.includes("zustand")) {
              return "zustand";
            }
            if (id.includes("lucide-react")) {
              return "lucide";
            }
            if (id.includes("dayjs")) {
              return "dayjs";
            }
            if (id.includes("@faker-js")) {
              return "faker";
            }
            if (id.includes("axios")) {
              return "axios";
            }
            if (id.includes("@radix-ui")) {
              return "radix-ui";
            }
            if (id.includes("class-variance-authority")) {
              return "cva";
            }
            if (id.includes("clsx")) {
              return "clsx";
            }
            if (id.includes("tailwind-merge")) {
              return "tailwind-merge";
            }
            if (id.includes("react-hot-toast")) {
              return "toast";
            }
            if (id.includes("sonner")) {
              return "sonner";
            }
          }
        },
      },
    },
  },
});
