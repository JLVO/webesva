import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx'; // Importa la integración MDX
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import sharp from 'astro/assets/services/sharp'; // Importación directa del módulo
export default defineConfig({
  integrations: [tailwind(), react(),sitemap(),mdx()],
  site: "https://esva.pe", // MUY IMPORTANTE: Usa tu dominio aquí

  image: {
    service: sharp,
    //service: 'astro/assets/services/sharp', // o 'astro/assets/services/squoosh'
    // domains: ['example.com'], // Si usas imágenes externas
  },
  vite: {
    assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp', '**/*.gif'],
  },
  // base: '/mi-subruta/', // Si tu sitio está en una subruta
});