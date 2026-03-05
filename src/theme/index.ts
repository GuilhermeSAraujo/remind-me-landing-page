"use client";

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Inter', sans-serif" },
        body: { value: "'Inter', sans-serif" },
        mono: { value: "'JetBrains Mono', monospace" },
      },
      colors: {
        brand: {
          50:  { value: "#edfff5" },
          100: { value: "#d5ffea" },
          200: { value: "#adffd6" },
          300: { value: "#70ffb6" },
          400: { value: "#25D366" },
          500: { value: "#25D366" },
          600: { value: "#128C7E" },
          700: { value: "#0e6e63" },
          800: { value: "#0b5a51" },
          900: { value: "#084a43" },
        },
        surface: {
          50:  { value: "#f5f6f5" },
          100: { value: "#e8eae8" },
          200: { value: "#d0d4d2" },
          800: { value: "#1a2420" },
          900: { value: "#111714" },
          950: { value: "#0b0e0d" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
