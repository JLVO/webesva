#!/usr/bin/env node
// Genera un borrador de artículo para el blog de esva.pe y abre un PR.
// Reemplaza al antiguo "Hermes Blog Bot": antes de elegir tema, revisa los
// posts ya publicados y los PRs blog-draft-* ya cerrados, para no repetir
// el mismo tema una y otra vez (ese fue el bug que causó el reemplazo).

import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";

const REPO = "JLVO/webesva";
const BLOG_DIR = path.join(process.cwd(), "..", "..", "src/content/blog");
const IMAGES_DIR_WEB = "/imagenes/blog";
const DEFAULT_IMAGE = `${IMAGES_DIR_WEB}/tecnico-esva-soporte-cliente.webp`;
const MODEL = "claude-sonnet-5-5";

function extractScalarField(raw, field) {
  // Algunos .mdx antiguos no envuelven el valor en comillas — soporta ambos casos.
  const line = raw.match(new RegExp(`^${field}:\\s*(.*)$`, "m"))?.[1]?.trim() ?? "";
  return line.replace(/^"(.*)"$/, "$1");
}

function readPublishedPosts() {
  return readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = readFileSync(path.join(BLOG_DIR, f), "utf-8");
      const title = extractScalarField(raw, "title");
      const description = extractScalarField(raw, "description");
      const tags = raw.match(/^tags:\s*(\[.*?\])\s*$/m)?.[1] ?? "[]";
      return { file: f, title, description, tags };
    });
}

function readClosedDraftPRs() {
  const json = execFileSync(
    "gh",
    [
      "pr",
      "list",
      "--repo",
      REPO,
      "--state",
      "closed",
      "--limit",
      "200",
      "--json",
      "title,headRefName",
    ],
    { encoding: "utf-8" },
  );
  return JSON.parse(json).filter((pr) =>
    pr.headRefName.startsWith("blog-draft-"),
  );
}

function slugify(title) {
  return title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 70)
    .replace(/-$/, "");
}

function escapeYamlString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function generateArticle(exclusionContext) {
  const client = new Anthropic();

  const tool = {
    name: "write_blog_post",
    description:
      "Entrega el artículo completo de blog listo para publicar, en los campos exactos del frontmatter del sitio.",
    input_schema: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "Título del artículo, máximo 60 caracteres, en español neutro de Perú.",
        },
        description: {
          type: "string",
          description: "Meta descripción SEO, entre 120 y 155 caracteres, sin comillas dobles.",
        },
        tags: {
          type: "array",
          items: { type: "string" },
          minItems: 2,
          maxItems: 5,
          description: "2 a 5 etiquetas, reutilizando preferentemente categorías ya usadas en el blog.",
        },
        imageAlt: {
          type: "string",
          description: "Texto alternativo descriptivo para la imagen principal (no se genera imagen nueva).",
        },
        bodyMarkdown: {
          type: "string",
          description:
            "Cuerpo del artículo en Markdown, 1200-1800 palabras, con 3-5 encabezados ## y una sección final de Preguntas Frecuentes, cerrando con una llamada a la acción a ESVA (WhatsApp / cotización). No incluyas el frontmatter ni el título como encabezado h1.",
        },
      },
      required: ["title", "description", "tags", "imageAlt", "bodyMarkdown"],
    },
  };

  const systemPrompt = `Eres el redactor técnico del blog de ESVA Servicios Generales EIRL, una empresa de soporte técnico y seguridad electrónica en Piura, Perú (esva.pe). Escribes artículos de blog en español, con tono directo, técnico pero accesible, orientados a PYMEs de Piura, Sullana y Paita.

REGLA CRÍTICA DE UNICIDAD (OBLIGATORIA):
Antes de elegir el tema, compara tu idea contra la siguiente lista de exclusión. Si el tema central coincide o se superpone significativamente con algo ya publicado o ya rechazado, DESCÁRTALO y elige otro ángulo o servicio distinto dentro de las líneas reales de ESVA (soporte técnico, mantenimiento preventivo, cámaras de seguridad/CCTV, control de acceso biométrico, redes y cableado estructurado, conectividad Starlink, UPS/energía crítica, recuperación de datos, ciberseguridad básica para pymes). No inventes servicios que ESVA no ofrece.

${exclusionContext}

Ahora elige UN tema específico y útil que no esté en la lista de exclusión, y llama a la herramienta write_blog_post con el artículo completo.`;

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 4096,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content:
          "Genera el próximo artículo del blog siguiendo la regla de unicidad.",
      },
    ],
    tools: [tool],
    tool_choice: { type: "tool", name: "write_blog_post" },
  });

  const final = await stream.finalMessage();
  const toolUse = final.content.find((b) => b.type === "tool_use");
  if (!toolUse) {
    throw new Error("El modelo no devolvió el artículo en el formato esperado.");
  }
  return toolUse.input;
}

function validateArticle(article) {
  const errors = [];
  if (!article.title || article.title.length > 70) {
    errors.push(`Título inválido o muy largo (${article.title?.length ?? 0} caracteres).`);
  }
  if (!article.description || article.description.length > 165) {
    errors.push(`Descripción muy larga (${article.description?.length ?? 0} caracteres).`);
  }
  if (!Array.isArray(article.tags) || article.tags.length < 1) {
    errors.push("Faltan tags.");
  }
  if (!article.bodyMarkdown || article.bodyMarkdown.length < 500) {
    errors.push("El cuerpo del artículo es demasiado corto.");
  }
  if (errors.length) {
    throw new Error("Artículo generado inválido:\n" + errors.join("\n"));
  }
}

function run(cmd, args) {
  execFileSync(cmd, args, { stdio: "inherit" });
}

async function main() {
  const posts = readPublishedPosts();
  const closedPRs = readClosedDraftPRs();

  const publishedList =
    posts.map((p) => `- "${p.title}" | tags: ${p.tags} | ${p.description}`).join("\n") ||
    "(ninguno)";
  const rejectedList =
    closedPRs.map((pr) => `- "${pr.title}" (rama: ${pr.headRefName})`).join("\n") ||
    "(ninguno)";

  const exclusionContext = `ARTÍCULOS YA PUBLICADOS EN EL BLOG:\n${publishedList}\n\nTEMAS YA PROPUESTOS Y RECHAZADOS (Pull Requests cerrados sin fusionar):\n${rejectedList}`;

  console.log(`Posts publicados: ${posts.length} | PRs rechazados en historial: ${closedPRs.length}`);

  if (process.argv.includes("--dry-run")) {
    console.log("\n--- Contexto de exclusión que se enviará al modelo ---\n");
    console.log(exclusionContext);
    console.log("\n(--dry-run: no se llamó al modelo ni se creó ningún PR)");
    return;
  }

  const article = await generateArticle(exclusionContext);
  validateArticle(article);

  const slug = slugify(article.title);
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (existsSync(mdxPath)) {
    throw new Error(`Ya existe un archivo para el slug "${slug}" — el modelo repitió un título muy similar.`);
  }

  const pubDate = new Date().toISOString().slice(0, 10);
  const tagsYaml = `[${article.tags.map((t) => `"${escapeYamlString(t)}"`).join(", ")}]`;

  const frontmatter = `---
title: "${escapeYamlString(article.title)}"
pubDate: "${pubDate}"
description: "${escapeYamlString(article.description)}"
image:
  url: "${DEFAULT_IMAGE}"
  alt: "${escapeYamlString(article.imageAlt)}"
tags: ${tagsYaml}
author: "ESVA Servicios Generales"
---

<!-- NOTA PARA REVISIÓN: esta imagen es un placeholder genérico. Reemplázala por una miniatura personalizada antes de fusionar este PR. -->

${article.bodyMarkdown.trim()}
`;

  writeFileSync(mdxPath, frontmatter, "utf-8");

  const branch = `blog-draft-${slug}`;
  run("git", ["checkout", "-b", branch]);
  run("git", ["add", mdxPath]);
  run("git", ["commit", "-m", `Borrador de blog: ${slug}`]);
  run("git", ["push", "origin", branch]);

  const prBody = `Artículo generado automáticamente por el agente de blog de ESVA (Claude, modelo ${MODEL}).

**Antes de fusionar:**
- [ ] Reemplazar la imagen principal (\`${DEFAULT_IMAGE}\`, placeholder genérico) por una miniatura personalizada.
- [ ] Revisar el contenido y el tono.

🤖 Generado con [Claude Code](https://claude.com/claude-code)`;

  run("gh", [
    "pr",
    "create",
    "--repo",
    REPO,
    "--title",
    `Borrador de blog: ${article.title}`,
    "--body",
    prBody,
    "--head",
    branch,
    "--base",
    "master",
  ]);

  console.log(`PR creado para la rama ${branch}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
