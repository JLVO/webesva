import { useState, useMemo, useEffect } from 'react';

// Función para encontrar el precio más bajo de los proveedores
// La mantenemos por si en el futuro un producto puede venir de varias fuentes en la BD
const getPrecioMasBajo = (proveedores) => {
  if (!proveedores || proveedores.length === 0) return 0;
  return Math.min(...proveedores.map(p => p.precio));
};

export default function Cotizador() {
  // Estados de la aplicación
  const [productos, setProductos] = useState([]);
  const [productoSeleccionadoId, setProductoSeleccionadoId] = useState('');
  const [cotizacion, setCotizacion] = useState([]);
  const [gananciaPorcentaje, setGananciaPorcentaje] = useState(30);
  const [costoInstalacion, setCostoInstalacion] = useState(0);
  
  // Estados para la carga de datos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // --- EFECTO PARA CARGAR DATOS DESDE LA API ---
  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('/api/productos.json');
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();

        // Transformamos los datos de la BD a la estructura que el cotizador espera
        // con el concepto de "proveedores" para mantener la lógica interna.
        const productosAgrupados = data.map(producto => ({
          id: producto.id,
          nombre: producto.nombre,
          // Asumimos que el precio de la BD es el final y lo asignamos a un proveedor genérico
          proveedores: [{ nombre: 'Base de Datos', precio: producto.precio }]
        }));

        setProductos(productosAgrupados);

      } catch (e) {
        console.error("Error al cargar productos:", e);
        setError('No se pudieron cargar los productos. Verifique la conexión y la API.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente


  // --- MANEJADORES DE EVENTOS ---

  const handleAnadirProducto = () => {
    if (!productoSeleccionadoId) return;

    const productoExistente = cotizacion.find(p => p.id === productoSeleccionadoId);
    if (productoExistente) {
      handleCambiarCantidad(productoSeleccionadoId, productoExistente.cantidad + 1);
    } else {
      const producto = productos.find(p => p.id === productoSeleccionadoId);
      if (producto) {
        const precioUnitario = getPrecioMasBajo(producto.proveedores);
        setCotizacion([...cotizacion, { ...producto, cantidad: 1, precioUnitario }]);
      }
    }
  };

  const handleQuitarProducto = (id) => {
    setCotizacion(cotizacion.filter(p => p.id !== id));
  };

  const handleCambiarCantidad = (id, cantidad) => {
    const nuevaCantidad = Math.max(1, Number(cantidad));
    setCotizacion(
      cotizacion.map(p => (p.id === id ? { ...p, cantidad: nuevaCantidad } : p))
    );
  };

  // --- CÁLCULOS MEMORIZADOS ---

  const costoTotalProductos = useMemo(() => {
    return cotizacion.reduce((total, p) => total + p.precioUnitario * p.cantidad, 0);
  }, [cotizacion]);

  const montoGanancia = useMemo(() => {
    return costoTotalProductos * (gananciaPorcentaje / 100);
  }, [costoTotalProductos, gananciaPorcentaje]);

  const totalCliente = useMemo(() => {
    return costoTotalProductos + montoGanancia + Number(costoInstalacion);
  }, [costoTotalProductos, montoGanancia, costoInstalacion]);

  // --- RENDERIZADO DEL COMPONENTE ---

  return (
    <div class="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      
      {/* SECCIÓN 1: Selector de Productos */}
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">1. Añadir Productos</h2>
        
        {loading && <p class="text-center text-gray-400 py-4">Cargando productos desde la base de datos...</p>}
        {error && <p class="text-center text-red-500 py-4">{error}</p>}

        {!loading && !error && (
          <div class="flex items-center space-x-4">
            <select 
              class="w-full bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={productoSeleccionadoId}
              onChange={(e) => setProductoSeleccionadoId(e.target.value)}
              disabled={productos.length === 0}
            >
              <option value="">{productos.length > 0 ? "Selecciona un producto..." : "No hay productos disponibles"}</option>
              {productos.map(p => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>
            <button 
              onClick={handleAnadirProducto}
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
              disabled={productos.length === 0 || !productoSeleccionadoId}
            >
              Añadir
            </button>
          </div>
        )}
      </div>

      {/* SECCIÓN 2: Lista de Productos Seleccionados */}
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">2. Productos en Cotización</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full leading-normal bg-gray-700 rounded-lg">
            <thead>
              <tr>
                <th class="px-5 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Producto</th>
                <th class="px-5 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Cantidad</th>
                <th class="px-5 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Precio Unit.</th>
                <th class="px-5 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Subtotal</th>
                <th class="px-5 py-3 border-b-2 border-gray-600"></th>
              </tr>
            </thead>
            <tbody>
              {cotizacion.length === 0 ? (
                <tr>
                  <td colSpan="5" class="text-center py-4 text-gray-400">No hay productos añadidos.</td>
                </tr>
              ) : (
                cotizacion.map(p => (
                  <tr key={p.id}>
                    <td class="px-5 py-4 border-b border-gray-600">{p.nombre}</td>
                    <td class="px-5 py-4 border-b border-gray-600">
                      <input 
                        type="number" 
                        value={p.cantidad}
                        onChange={(e) => handleCambiarCantidad(p.id, e.target.value)}
                        class="w-20 bg-gray-800 text-white p-1 rounded-md text-center"
                      />
                    </td>
                    <td class="px-5 py-4 border-b border-gray-600">S/ {p.precioUnitario.toFixed(2)}</td>
                    <td class="px-5 py-4 border-b border-gray-600">S/ {(p.precioUnitario * p.cantidad).toFixed(2)}</td>
                    <td class="px-5 py-4 border-b border-gray-600 text-center">
                      <button onClick={() => handleQuitarProducto(p.id)} class="text-red-500 hover:text-red-700">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECCIÓN 3: Configuración y Resumen */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">3. Configuración</h2>
          <div class="space-y-4">
            <div>
              <label class="block mb-1 font-semibold">% de Ganancia</label>
              <input 
                type="number" 
                value={gananciaPorcentaje}
                onChange={(e) => setGananciaPorcentaje(e.target.value)}
                class="w-full bg-gray-700 text-white p-2 rounded-md" 
              />
            </div>
            <div>
              <label class="block mb-1 font-semibold">Costos de Instalación (S/)</label>
              <input 
                type="number" 
                placeholder="0.00"
                value={costoInstalacion}
                onChange={(e) => setCostoInstalacion(e.target.value)}
                class="w-full bg-gray-700 text-white p-2 rounded-md" 
              />
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">4. Resumen</h2>
          <div class="bg-gray-900 p-4 rounded-lg space-y-3">
            <div class="flex justify-between">
              <span>Costo Productos:</span>
              <span class="font-bold">S/ {costoTotalProductos.toFixed(2)}</span>
            </div>
            <div class="flex justify-between">
              <span>Ganancia ({gananciaPorcentaje}%):</span>
              <span class="font-bold">S/ {montoGanancia.toFixed(2)}</span>
            </div>
            <div class="flex justify-between">
              <span>Instalación:</span>
              <span class="font-bold">S/ {Number(costoInstalacion).toFixed(2)}</span>
            </div>
            <hr class="border-gray-600"/>
            <div class="flex justify-between text-2xl font-bold text-green-400">
              <span>TOTAL:</span>
              <span>S/ {totalCliente.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
