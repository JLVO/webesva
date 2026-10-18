import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx'; // Importa la integración MDX
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel({
    imageService: true,
  }),
  integrations: [tailwind(), react(),sitemap(),mdx()],
  site: "https://esva.pe", // MUY IMPORTANTE: Usa tu dominio aquí
  trailingSlash: 'always', // Agrega esta línea
  // base: '/mi-subruta/', // Si tu sitio está en una subruta
});