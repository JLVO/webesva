// src/utils/getHeadings.js
import { toString } from 'mdast-util-to-string';
import { slug } from 'github-slugger';

export function getHeadings(tree) {
  const headings = [];
  for (const node of tree.children) {
    if (node.type === 'heading') {
      const text = toString(node);
      const depth = node.depth;
      const headingSlug = slug(text); // Genera un ID compatible con URL

      // Asegúrate de que el ID (slug) se añada al nodo del encabezado
      // Esto es importante para que el componente `getHeadings` pueda funcionar
      // En Astro, los encabezados ya tienen un ID generado si no lo especificas
      // Si tu tema de Astro no añade IDs automáticamente, esto es crucial.
      // Para MDX, esto es manejado por rehype-slug o similar, que Astro incluye.

      headings.push({
        depth,
        slug: headingSlug,
        text,
      });
    }
  }
  return headings;
}