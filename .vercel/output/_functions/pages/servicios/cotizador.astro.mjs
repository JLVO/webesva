/* empty css                                     */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DrspBrkT.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
export { renderers } from '../../renderers.mjs';

const getPrecioMasBajo = (proveedores) => {
  if (!proveedores || proveedores.length === 0) return 0;
  return Math.min(...proveedores.map((p) => p.precio));
};
function Cotizador() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionadoId, setProductoSeleccionadoId] = useState("");
  const [cotizacion, setCotizacion] = useState([]);
  const [gananciaPorcentaje, setGananciaPorcentaje] = useState(30);
  const [costoInstalacion, setCostoInstalacion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("/api/productos.json");
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        const productosAgrupados = data.map((producto) => ({
          id: producto.id,
          nombre: producto.nombre,
          // Asumimos que el precio de la BD es el final y lo asignamos a un proveedor genérico
          proveedores: [{ nombre: "Base de Datos", precio: producto.precio }]
        }));
        setProductos(productosAgrupados);
      } catch (e) {
        console.error("Error al cargar productos:", e);
        setError("No se pudieron cargar los productos. Verifique la conexión y la API.");
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);
  const handleAnadirProducto = () => {
    if (!productoSeleccionadoId) return;
    const productoExistente = cotizacion.find((p) => p.id === productoSeleccionadoId);
    if (productoExistente) {
      handleCambiarCantidad(productoSeleccionadoId, productoExistente.cantidad + 1);
    } else {
      const producto = productos.find((p) => p.id === productoSeleccionadoId);
      if (producto) {
        const precioUnitario = getPrecioMasBajo(producto.proveedores);
        setCotizacion([...cotizacion, { ...producto, cantidad: 1, precioUnitario }]);
      }
    }
  };
  const handleQuitarProducto = (id) => {
    setCotizacion(cotizacion.filter((p) => p.id !== id));
  };
  const handleCambiarCantidad = (id, cantidad) => {
    const nuevaCantidad = Math.max(1, Number(cantidad));
    setCotizacion(
      cotizacion.map((p) => p.id === id ? { ...p, cantidad: nuevaCantidad } : p)
    );
  };
  const costoTotalProductos = useMemo(() => {
    return cotizacion.reduce((total, p) => total + p.precioUnitario * p.cantidad, 0);
  }, [cotizacion]);
  const montoGanancia = useMemo(() => {
    return costoTotalProductos * (gananciaPorcentaje / 100);
  }, [costoTotalProductos, gananciaPorcentaje]);
  const totalCliente = useMemo(() => {
    return costoTotalProductos + montoGanancia + Number(costoInstalacion);
  }, [costoTotalProductos, montoGanancia, costoInstalacion]);
  return /* @__PURE__ */ jsxs("div", { class: "bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { class: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { class: "text-2xl font-semibold mb-4 border-b border-gray-600 pb-2", children: "1. Añadir Productos" }),
      loading && /* @__PURE__ */ jsx("p", { class: "text-center text-gray-400 py-4", children: "Cargando productos desde la base de datos..." }),
      error && /* @__PURE__ */ jsx("p", { class: "text-center text-red-500 py-4", children: error }),
      !loading && !error && /* @__PURE__ */ jsxs("div", { class: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxs(
          "select",
          {
            class: "w-full bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            value: productoSeleccionadoId,
            onChange: (e) => setProductoSeleccionadoId(e.target.value),
            disabled: productos.length === 0,
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: productos.length > 0 ? "Selecciona un producto..." : "No hay productos disponibles" }),
              productos.map((p) => /* @__PURE__ */ jsx("option", { value: p.id, children: p.nombre }, p.id))
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleAnadirProducto,
            class: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors",
            disabled: productos.length === 0 || !productoSeleccionadoId,
            children: "Añadir"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { class: "text-2xl font-semibold mb-4 border-b border-gray-600 pb-2", children: "2. Productos en Cotización" }),
      /* @__PURE__ */ jsx("div", { class: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { class: "min-w-full leading-normal bg-gray-700 rounded-lg", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { class: "px-5 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider", children: "Producto" }),
          /* @__PURE__ */ jsx("th", { class: "px-5 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider", children: "Cantidad" }),
          /* @__PURE__ */ jsx("th", { class: "px-5 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider", children: "Precio Unit." }),
          /* @__PURE__ */ jsx("th", { class: "px-5 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider", children: "Subtotal" }),
          /* @__PURE__ */ jsx("th", { class: "px-5 py-3 border-b-2 border-gray-600" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: cotizacion.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "5", class: "text-center py-4 text-gray-400", children: "No hay productos añadidos." }) }) : cotizacion.map((p) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { class: "px-5 py-4 border-b border-gray-600", children: p.nombre }),
          /* @__PURE__ */ jsx("td", { class: "px-5 py-4 border-b border-gray-600", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: p.cantidad,
              onChange: (e) => handleCambiarCantidad(p.id, e.target.value),
              class: "w-20 bg-gray-800 text-white p-1 rounded-md text-center"
            }
          ) }),
          /* @__PURE__ */ jsxs("td", { class: "px-5 py-4 border-b border-gray-600", children: [
            "S/ ",
            p.precioUnitario.toFixed(2)
          ] }),
          /* @__PURE__ */ jsxs("td", { class: "px-5 py-4 border-b border-gray-600", children: [
            "S/ ",
            (p.precioUnitario * p.cantidad).toFixed(2)
          ] }),
          /* @__PURE__ */ jsx("td", { class: "px-5 py-4 border-b border-gray-600 text-center", children: /* @__PURE__ */ jsx("button", { onClick: () => handleQuitarProducto(p.id), class: "text-red-500 hover:text-red-700", children: "Eliminar" }) })
        ] }, p.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { class: "text-2xl font-semibold mb-4 border-b border-gray-600 pb-2", children: "3. Configuración" }),
        /* @__PURE__ */ jsxs("div", { class: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { class: "block mb-1 font-semibold", children: "% de Ganancia" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                value: gananciaPorcentaje,
                onChange: (e) => setGananciaPorcentaje(e.target.value),
                class: "w-full bg-gray-700 text-white p-2 rounded-md"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { class: "block mb-1 font-semibold", children: "Costos de Instalación (S/)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                placeholder: "0.00",
                value: costoInstalacion,
                onChange: (e) => setCostoInstalacion(e.target.value),
                class: "w-full bg-gray-700 text-white p-2 rounded-md"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { class: "text-2xl font-semibold mb-4 border-b border-gray-600 pb-2", children: "4. Resumen" }),
        /* @__PURE__ */ jsxs("div", { class: "bg-gray-900 p-4 rounded-lg space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { class: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Costo Productos:" }),
            /* @__PURE__ */ jsxs("span", { class: "font-bold", children: [
              "S/ ",
              costoTotalProductos.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { class: "flex justify-between", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "Ganancia (",
              gananciaPorcentaje,
              "%):"
            ] }),
            /* @__PURE__ */ jsxs("span", { class: "font-bold", children: [
              "S/ ",
              montoGanancia.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { class: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Instalación:" }),
            /* @__PURE__ */ jsxs("span", { class: "font-bold", children: [
              "S/ ",
              Number(costoInstalacion).toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsx("hr", { class: "border-gray-600" }),
          /* @__PURE__ */ jsxs("div", { class: "flex justify-between text-2xl font-bold text-green-400", children: [
            /* @__PURE__ */ jsx("span", { children: "TOTAL:" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "S/ ",
              totalCliente.toFixed(2)
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

const $$Cotizador = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cotizador de Productos - ESVA" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-4xl font-bold text-center mb-8">Cotizador Interno de Productos</h1> ${renderComponent($$result2, "Cotizador", Cotizador, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ZERO/Documents/webesva/src/components/Cotizador.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/servicios/cotizador.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/servicios/cotizador.astro";
const $$url = "/servicios/cotizador/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cotizador,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
