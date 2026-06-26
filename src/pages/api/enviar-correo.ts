import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

// Inicializamos Resend utilizando la clave de API desde las variables de entorno
const resend = new Resend(import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { nombre, correo, telefono, servicio, mensaje } = data;

    // Validación básica de campos requeridos
    if (!nombre || !correo || !mensaje) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Por favor, completa todos los campos obligatorios (*).',
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
          message: 'El servidor de correo no está configurado (falta la clave de API). Por favor, contacte al administrador.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Traducir identificadores de servicios a nombres amigables
    const serviciosMap: Record<string, string> = {
      soporte: 'Soporte Técnico',
      redes: 'Instalación de Redes',
      seguridad: 'Seguridad Electrónica',
      mantenimiento: 'Mantenimiento Preventivo',
      recuperacion: 'Recuperación de Datos',
      domicilio: 'Servicio a Domicilio'
    };
    const servicioAmigable = serviciosMap[servicio] || servicio || 'No especificado';

    // Enviar el correo usando la API de Resend
    // NOTA: Para producción, requiere verificar el dominio "esva.pe" en Resend
    const emailResult = await resend.emails.send({
      from: 'Web ESVA <contacto@esva.pe>',
      to: ['luis.vargas@esva.pe', 'contactanos@esva.pe'],
      replyTo: correo, // Permite responder al cliente directamente haciendo clic en "Responder"
      subject: `Nuevo mensaje de contacto de ${nombre} - ESVA`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0; font-size: 22px;">Nuevo Mensaje desde la Web</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 30%; color: #4a5568;">Nombre:</td>
              <td style="padding: 8px 0; color: #1a202c;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Correo:</td>
              <td style="padding: 8px 0; color: #1a202c;">
                <a href="mailto:${correo}" style="color: #2563eb; text-decoration: none;">${correo}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Teléfono:</td>
              <td style="padding: 8px 0; color: #1a202c;">${telefono || 'No especificado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Servicio solicitado:</td>
              <td style="padding: 8px 0; color: #1a202c; font-weight: 500;">${servicioAmigable}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f7fafc; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h4 style="margin: 0 0 8px 0; color: #1e3a8a; font-size: 16px;">Mensaje del cliente:</h4>
            <p style="margin: 0; color: #2d3748; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
          </div>
          
          <div style="margin-top: 25px; font-size: 12px; color: #a0aec0; text-align: center; border-top: 1px solid #edf2f7; padding-top: 15px;">
            Este mensaje fue generado automáticamente por el formulario de la página web <a href="https://esva.pe" style="color: #a0aec0;">esva.pe</a>.
          </div>
        </div>
      `
    });

    if (emailResult.error) {
      console.error('Error al enviar con Resend:', emailResult.error);
      
      // Control de error de verificación de dominio para guiar al usuario
      if (emailResult.error.name === 'validation_error' || emailResult.error.message.includes('verify')) {
        return new Response(
          JSON.stringify({
            success: false,
            message: 'El dominio esva.pe no está verificado en la cuenta de Resend configurada. Asegúrese de completar la verificación DNS.',
            error: emailResult.error
          }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({
          success: false,
          message: 'Error al enviar el correo a través del servicio de Resend.',
          error: emailResult.error
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Mensaje enviado correctamente.',
        data: emailResult.data
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error interno en endpoint enviar-correo:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Ocurrió un error inesperado al procesar la solicitud en el servidor.'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
