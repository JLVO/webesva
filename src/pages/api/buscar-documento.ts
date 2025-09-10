import type { APIRoute } from 'astro';

// Función para validar el formato del documento
const validarDocumento = (tipo: string | null | undefined, numero: string | null | undefined): { valido: boolean; mensaje?: string } => {
  if (!tipo || !numero) {
    return { valido: false, mensaje: 'Los parámetros "tipo" y "numero" son requeridos.' };
  }

  if (tipo !== 'dni' && tipo !== 'ruc') {
    return { valido: false, mensaje: 'El tipo de documento debe ser "dni" o "ruc".' };
  }

  if (!/^\d+$/.test(numero)) {
    return { valido: false, mensaje: 'El número de documento solo debe contener dígitos.' };
  }

  if (tipo === 'dni' && numero.length !== 8) {
    return { valido: false, mensaje: 'El DNI debe tener 8 dígitos.' };
  }

  if (tipo === 'ruc' && numero.length !== 11) {
    return { valido: false, mensaje: 'El RUC debe tener 11 dígitos.' };
  }

  return { valido: true };
};

export const GET: APIRoute = async ({ request }) => {
  // Configuración
  const TOKEN = import.meta.env.APIS_NET_PE_TOKEN;
  const MODO_PRUEBAS = import.meta.env.MODO_PRUEBAS === 'true';

  // --- LOG DE INICIO ---
  console.log('--- Iniciando consulta en /api/buscar-documento ---');
  console.log('URL solicitada:', request.url);
  
  if (MODO_PRUEBAS) {
    console.warn('⚠️  MODO DE PRUEBAS ACTIVADO - Usando datos de prueba');
  } else if (!TOKEN) {
    console.error('❌ ERROR: La variable de entorno APIS_NET_PE_TOKEN no está configurada');
  } else {
    console.log('✅ Token APIS_NET_PE_TOKEN encontrado');
  }

  // Obtener parámetros de la URL
  const url = new URL(request.url);
  const tipo = url.searchParams.get('tipo')?.toLowerCase();
  const numero = url.searchParams.get('numero');

  // Validar parámetros
  const validacion = validarDocumento(tipo, numero);
  if (!validacion.valido) {
    console.error('❌ Validación fallida:', validacion.mensaje);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: validacion.mensaje || 'Parámetros inválidos' 
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // --- MODO DE PRUEBAS ---
  if (MODO_PRUEBAS) {
    console.log('🔧 Generando respuesta de prueba para:', { tipo, numero });
    
    // Datos de prueba para DNI
    if (tipo === 'dni') {
      const datosPrueba = {
        success: true,
        dni: numero,
        nombres: 'JUAN',
        apellidoPaterno: 'PEREZ',
        apellidoMaterno: 'GONZALES',
        direccion: 'AV. LIMA 123',
        ubigeo: '150101',
        departamento: 'LIMA',
        provincia: 'LIMA',
        distrito: 'LIMA',
        isActive: true
      };
      
      return new Response(
        JSON.stringify(datosPrueba),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Datos de prueba para RUC
    if (tipo === 'ruc') {
      const datosPrueba = {
        success: true,
        ruc: numero,
        nombre: 'EMPRESA EJEMPLO S.A.C.',
        tipo: 'SOCIEDAD ANONINA CERRADA',
        estado: 'ACTIVO',
        condicion: 'HABIDO',
        direccion: 'AV. EJEMPLO 123 URB. EJEMPLO',
        departamento: 'LIMA',
        provincia: 'LIMA',
        distrito: 'SAN ISIDRO',
        ubigeo: '150136',
        isActive: true
      };
      
      return new Response(
        JSON.stringify(datosPrueba),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  // Verificar token en producción
  if (!TOKEN) {
    const errorMsg = 'Error de configuración: El token de la API no está disponible.';
    console.error('❌', errorMsg);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: errorMsg,
        code: 'API_TOKEN_MISSING'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Construir URL de la API externa
  const apiUrl = `https://api.apis.net.pe/v1/${tipo}?numero=${numero}`;
  
  try {
    console.log(`🌐 Consultando API externa: ${apiUrl}`);
    
    // Configurar un timeout para la petición
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Timeout de 10 segundos
    
    const response = await fetch(apiUrl, {
      signal: controller.signal,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Referer': 'https://apis.net.pe/solucion-gratuita',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    // Limpiar el timeout ya que la respuesta llegó
    clearTimeout(timeoutId);

    console.log(`📊 Respuesta de la API externa: ${response.status} ${response.statusText}`);

    // Manejar respuestas de error de la API
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
        console.error('❌ Error de la API externa:', JSON.stringify(errorData, null, 2));
      } catch (e) {
        console.error('❌ No se pudo parsear la respuesta de error de la API:', e);
        errorData = { message: `Error ${response.status}: ${response.statusText}` };
      }
      
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Error al consultar el documento',
          error: errorData,
          code: `API_ERROR_${response.status}`
        }),
        { 
          status: response.status >= 500 ? 502 : 400, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Procesar respuesta exitosa
    let data;
    try {
      data = await response.json();
      console.log('✅ Datos recibidos correctamente');
      
      // Validar que los datos recibidos tengan el formato esperado
      if (tipo === 'dni' && (!data.nombres || !data.apellidoPaterno)) {
        throw new Error('La respuesta de la API no contiene los datos esperados para DNI');
      }
      
      if (tipo === 'ruc' && !data.nombre) {
        throw new Error('La respuesta de la API no contiene los datos esperados para RUC');
      }
      
      return new Response(
        JSON.stringify({
          success: true,
          ...data
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
      
    } catch (e: any) {
      console.error('❌ Error al procesar la respuesta de la API:', e);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Error al procesar la respuesta del servidor',
          error: e?.message || 'Error desconocido',
          code: 'INVALID_RESPONSE_FORMAT'
        }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

  } catch (error: any) {
    // Manejar diferentes tipos de errores
    console.error('❌ Error en la consulta a la API:', error);
    
    let errorMessage = 'Error al consultar el documento';
    let statusCode = 500;
    let errorCode = 'UNKNOWN_ERROR';
    
    if (error?.name === 'AbortError') {
      errorMessage = 'La consulta ha excedido el tiempo de espera';
      statusCode = 504; // Gateway Timeout
      errorCode = 'TIMEOUT_ERROR';
    } else if (error?.name === 'TypeError') {
      errorMessage = 'Error de red al intentar conectar con el servicio';
      statusCode = 503; // Service Unavailable
      errorCode = 'NETWORK_ERROR';
    }
    
    return new Response(
      JSON.stringify({
        success: false,
        message: errorMessage,
        error: error?.message || 'Error desconocido',
        code: errorCode
      }),
      { status: statusCode, headers: { 'Content-Type': 'application/json' } }
    );
  }
};