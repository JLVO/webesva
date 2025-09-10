import mysql from 'mysql2/promise';
export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://esva.pe", "SSR": true};
const GET = async ({ params, request }) => {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = Object.assign(__vite_import_meta_env__, { OS: process.env.OS });
  let connection;
  try {
    connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE
    });
    const [rows] = await connection.execute("SELECT * FROM productos");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error en el servidor al consultar los productos." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
