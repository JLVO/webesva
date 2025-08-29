import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

export const prerender = false;

// Ruta al archivo JSON donde se guardarán los datos
// Usamos process.cwd() para asegurarnos de que la ruta sea relativa a la raíz del proyecto
const dataFilePath = path.join(process.cwd(), 'data', 'evaluaciones.json');

// Asegurarse de que el directorio de datos exista
const ensureDataDirExists = async () => {
  try {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
  } catch (error) {
    console.error("Error creating data directory:", error);
  }
};

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    await ensureDataDirExists();
    const body = await request.json();

    // Aquí podrías añadir validación de datos

    try {
      // Leer los datos existentes
      let existingData = [];
      try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        existingData = JSON.parse(fileContent);
      } catch (error) {
        // El archivo no existe todavía, lo cual está bien
      }

      // Añadir la nueva evaluación y la fecha
      existingData.push({ ...body, fecha: new Date().toISOString() });

      // Escribir los datos actualizados de vuelta al archivo
      await fs.writeFile(dataFilePath, JSON.stringify(existingData, null, 2));

      return new Response(JSON.stringify({ message: "Evaluación guardada con éxito" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: "Error al guardar la evaluación" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else {
    return new Response("Content-Type must be application/json", { status: 400 });
  }
};
