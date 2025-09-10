export { renderers } from '../../renderers.mjs';

const validarDocumento = (tipo, numero) => {
  if (!tipo || !numero) {
    return { valido: false, mensaje: 'Los parámetros "tipo" y "numero" son requeridos.' };
  }
  if (tipo !== "dni" && tipo !== "ruc") {
    return { valido: false, mensaje: 'El tipo de documento debe ser "dni" o "ruc".' };
  }
  if (!/^\d+$/.test(numero)) {
    return { valido: false, mensaje: "El número de documento solo debe contener dígitos." };
  }
  if (tipo === "dni" && numero.length !== 8) {
    return { valido: false, mensaje: "El DNI debe tener 8 dígitos." };
  }
  if (tipo === "ruc" && numero.length !== 11) {
    return { valido: false, mensaje: "El RUC debe tener 11 dígitos." };
  }
  return { valido: true };
};
const GET = async ({ request }) => {
  console.log("--- Iniciando consulta en /api/buscar-documento ---");
  console.log("URL solicitada:", request.url);
  {
    console.error("❌ ERROR: La variable de entorno APIS_NET_PE_TOKEN no está configurada");
  }
  const url = new URL(request.url);
  const tipo = url.searchParams.get("tipo")?.toLowerCase();
  const numero = url.searchParams.get("numero");
  const validacion = validarDocumento(tipo, numero);
  if (!validacion.valido) {
    console.error("❌ Validación fallida:", validacion.mensaje);
    return new Response(
      JSON.stringify({
        success: false,
        message: validacion.mensaje || "Parámetros inválidos"
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  {
    const errorMsg = "Error de configuración: El token de la API no está disponible.";
    console.error("❌", errorMsg);
    return new Response(
      JSON.stringify({
        success: false,
        message: errorMsg,
        code: "API_TOKEN_MISSING"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
