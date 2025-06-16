import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx'; // Importa la integración MDX
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";


export default defineConfig({
  integrations: [tailwind(), react(),sitemap(),mdx()],
  site: "https://esva.pe", // MUY IMPORTANTE: Usa tu dominio aquí
});