
import type { APIRoute } from 'astro';
import mysql from 'mysql2/promise';

export const GET: APIRoute = async ({ params, request }) => {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = import.meta.env;

  let connection;

  try {
    // Conectar a la base de datos
    connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
    });

    // Realizar la consulta
    const [rows] = await connection.execute('SELECT * FROM productos');

    // Devolver los resultados como JSON
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error en el servidor al consultar los productos." }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    // Asegurarse de que la conexión se cierre siempre
    if (connection) {
      await connection.end();
    }
  }
};
