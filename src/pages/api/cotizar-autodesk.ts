import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY);

// Catálogo real del canal Open de ESVA (lista de precios vigente). Se valida
// aquí también para que nadie pueda mandar un "producto" inventado por fuera
// de lo que ESVA puede efectivamente revender.
const PRODUCTOS_VALIDOS: Record<string, string> = {
  'autocad': 'AutoCAD (incluye toolsets especializados)',
  'autocad-lt': 'AutoCAD LT',
  'autocad-revit-lt-suite': 'AutoCAD Revit LT Suite',
  'autocad-lt-mac': 'AutoCAD LT para Mac',
  'autocad-raster-design': 'AutoCAD Raster Design',
  'autocad-web': 'AutoCAD Web',
  '3ds-max': '3ds Max',
  'mudbox': 'Mudbox',
  'flow-studio': 'Flow Studio (Standard / Pro / Enterprise)',
  'navpack': 'NavPack (Core / Design)',
  'otro': 'Otro producto Autodesk / no estoy seguro',
};

export const ALL: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      success: false,
      message: 'Método no permitido. Este endpoint solo acepta solicitudes POST.',
    }),
    { status: 405, headers: { 'Content-Type': 'application/json', Allow: 'POST' } }
  );
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      nombre,
      correo,
      telefono,
      empresa,
      tipoSolicitud, // 'nueva' | 'renovacion'
      userIdAutodesk,
      productos, // string[]
      cantidad,
      plazo, // 'anual' | '3-anos' | 'no-se'
      comentarios,
    } = data;

    if (!nombre || !correo || !telefono || !Array.isArray(productos) || productos.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Completa tu nombre, correo, teléfono y selecciona al menos un producto.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (tipoSolicitud === 'renovacion' && !userIdAutodesk) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Para renovaciones, indica el User ID o correo de tu cuenta Autodesk actual.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Error: RESEND_API_KEY no está configurada.');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'El servidor de correo no está configurado. Por favor, contacte al administrador.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const productosNombres: string[] = productos
      .filter((p: string) => PRODUCTOS_VALIDOS[p])
      .map((p: string) => PRODUCTOS_VALIDOS[p]);

    if (productosNombres.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Selecciona al menos un producto válido.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const tipoSolicitudAmigable = tipoSolicitud === 'renovacion' ? 'Renovación de suscripción existente' : 'Suscripción nueva';
    const plazoAmigable: Record<string, string> = {
      anual: 'Anual',
      '3-anos': '3 años',
      'no-se': 'No especificado / asesorar',
    };

    const emailResult = await resend.emails.send({
      from: 'Web ESVA <contacto@esva.pe>',
      to: ['luis.vargas@esva.pe', 'contactanos@esva.pe'],
      replyTo: correo,
      subject: `Cotización Autodesk de ${nombre} - ${tipoSolicitudAmigable}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0; font-size: 22px;">Nueva Solicitud de Cotización Autodesk</h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 35%; color: #4a5568;">Nombre:</td>
              <td style="padding: 8px 0; color: #1a202c;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Empresa / RUC:</td>
              <td style="padding: 8px 0; color: #1a202c;">${empresa || 'No especificado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Correo:</td>
              <td style="padding: 8px 0; color: #1a202c;"><a href="mailto:${correo}" style="color: #2563eb; text-decoration: none;">${correo}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Teléfono:</td>
              <td style="padding: 8px 0; color: #1a202c;">${telefono}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Tipo de solicitud:</td>
              <td style="padding: 8px 0; color: #1a202c; font-weight: 600;">${tipoSolicitudAmigable}</td>
            </tr>
            ${tipoSolicitud === 'renovacion' ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">User ID / correo Autodesk:</td>
              <td style="padding: 8px 0; color: #1a202c;">${userIdAutodesk}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Cantidad de licencias:</td>
              <td style="padding: 8px 0; color: #1a202c;">${cantidad || 'No especificado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Plazo preferido:</td>
              <td style="padding: 8px 0; color: #1a202c;">${plazoAmigable[plazo as string] || 'No especificado'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h4 style="margin: 0 0 8px 0; color: #1e3a8a; font-size: 16px;">Productos de interés:</h4>
            <ul style="margin: 0; padding-left: 20px; color: #2d3748;">
              ${productosNombres.map((p) => `<li>${p}</li>`).join('')}
            </ul>
          </div>

          ${comentarios ? `
          <div style="margin-top: 20px; padding: 15px; background-color: #f7fafc; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h4 style="margin: 0 0 8px 0; color: #1e3a8a; font-size: 16px;">Comentarios adicionales:</h4>
            <p style="margin: 0; color: #2d3748; line-height: 1.6; white-space: pre-wrap;">${comentarios}</p>
          </div>` : ''}

          <div style="margin-top: 25px; font-size: 12px; color: #a0aec0; text-align: center; border-top: 1px solid #edf2f7; padding-top: 15px;">
            Generado automáticamente por el formulario de cotización Autodesk de <a href="https://esva.pe" style="color: #a0aec0;">esva.pe</a>.
          </div>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error('Error al enviar con Resend:', emailResult.error);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Error al enviar la solicitud a través del servicio de correo.',
          error: emailResult.error,
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Solicitud enviada correctamente.',
        data: emailResult.data,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error interno en endpoint cotizar-autodesk:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Ocurrió un error inesperado al procesar la solicitud en el servidor.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
