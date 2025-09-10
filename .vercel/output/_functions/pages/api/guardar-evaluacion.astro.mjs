import fs from 'node:fs/promises';
import nodePath from 'node:path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const dataFilePath = nodePath.join(process.cwd(), "data", "evaluaciones.json");
const ensureDataDirExists = async () => {
  try {
    await fs.mkdir(nodePath.dirname(dataFilePath), { recursive: true });
  } catch (error) {
    console.error("Error creating data directory:", error);
  }
};
const POST = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    await ensureDataDirExists();
    const body = await request.json();
    try {
      let existingData = [];
      try {
        const fileContent = await fs.readFile(dataFilePath, "utf-8");
        existingData = JSON.parse(fileContent);
      } catch (error) {
      }
      existingData.push({ ...body, fecha: (/* @__PURE__ */ new Date()).toISOString() });
      await fs.writeFile(dataFilePath, JSON.stringify(existingData, null, 2));
      return new Response(JSON.stringify({ message: "Evaluación guardada con éxito" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: "Error al guardar la evaluación" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  } else {
    return new Response("Content-Type must be application/json", { status: 400 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
