import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://esva.pe", // MUY IMPORTANTE: Usa tu dominio aquí
  integrations: [sitemap()],
});