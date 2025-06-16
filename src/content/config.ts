// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // 'content' para archivos Markdown/MDX, 'data' para JSON/YAML
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform(str => new Date(str)), // Convierte la fecha de string a Date
    updatedDate: z.string().transform(str => new Date(str)).optional(), // Opcional
    author: z.string().optional(),
    tags: z.array(z.string()).optional(), // Un array de strings para las etiquetas
    image: z.object({ // Definición para la imagen principal del frontmatter
      url: image().optional(), // Usa image() para validar la imagen, puede ser opcional
      alt: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};