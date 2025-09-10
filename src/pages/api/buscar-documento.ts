import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      success: false,
      message: 'Este servicio ha sido desactivado temporalmente.',
      code: 'SERVICE_DISABLED'
    }),
    {
      status: 503, // Service Unavailable
      headers: { 'Content-Type': 'application/json' }
    }
  );
};