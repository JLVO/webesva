import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BEr6yvae.mjs';
import { manifest } from './manifest_BvX9uwu4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/buscar-documento.astro.mjs');
const _page3 = () => import('./pages/api/guardar-evaluacion.astro.mjs');
const _page4 = () => import('./pages/api/productos.json.astro.mjs');
const _page5 = () => import('./pages/blog/_slug_.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/capacitacion/ciberseguridad/actividad-interactiva.astro.mjs');
const _page8 = () => import('./pages/capacitacion/ciberseguridad/buenas-practicas.astro.mjs');
const _page9 = () => import('./pages/capacitacion/ciberseguridad/conclusion.astro.mjs');
const _page10 = () => import('./pages/capacitacion/ciberseguridad/ejemplos-phishing-inmobiliario.astro.mjs');
const _page11 = () => import('./pages/capacitacion/ciberseguridad/ejercicio-arrastrar-soltar.astro.mjs');
const _page12 = () => import('./pages/capacitacion/ciberseguridad/ejercicio-diferencias.astro.mjs');
const _page13 = () => import('./pages/capacitacion/ciberseguridad/evaluacion.astro.mjs');
const _page14 = () => import('./pages/capacitacion/ciberseguridad/introduccion.astro.mjs');
const _page15 = () => import('./pages/capacitacion/ciberseguridad/panorama-amenazas.astro.mjs');
const _page16 = () => import('./pages/capacitacion/ciberseguridad/que-es-phishing.astro.mjs');
const _page17 = () => import('./pages/capacitacion/ciberseguridad/que-es-spoofing.astro.mjs');
const _page18 = () => import('./pages/capacitacion/ciberseguridad/recursos/cheatsheet.astro.mjs');
const _page19 = () => import('./pages/capacitacion/ciberseguridad/role-play.astro.mjs');
const _page20 = () => import('./pages/capacitacion/ciberseguridad.astro.mjs');
const _page21 = () => import('./pages/capacitacion.astro.mjs');
const _page22 = () => import('./pages/contactanos.astro.mjs');
const _page23 = () => import('./pages/nosotros.astro.mjs');
const _page24 = () => import('./pages/politica-de-cookies.astro.mjs');
const _page25 = () => import('./pages/politica-de-privacidad.astro.mjs');
const _page26 = () => import('./pages/servicios/camaras-de-seguridad.astro.mjs');
const _page27 = () => import('./pages/servicios/cotizador.astro.mjs');
const _page28 = () => import('./pages/servicios/formateo-instalacion.astro.mjs');
const _page29 = () => import('./pages/servicios/formateo-instalacion-programas.astro.mjs');
const _page30 = () => import('./pages/servicios/lectores-biometricos.astro.mjs');
const _page31 = () => import('./pages/servicios/mantenimiento-preventivo.astro.mjs');
const _page32 = () => import('./pages/servicios/mantenimiento-reparacion-informatica.astro.mjs');
const _page33 = () => import('./pages/servicios/recuperacion-datos.astro.mjs');
const _page34 = () => import('./pages/servicios/redes-conectividad.astro.mjs');
const _page35 = () => import('./pages/servicios/soporte-tecnico.astro.mjs');
const _page36 = () => import('./pages/servicios.astro.mjs');
const _page37 = () => import('./pages/terminos-y-condiciones.astro.mjs');
const _page38 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/buscar-documento.ts", _page2],
    ["src/pages/api/guardar-evaluacion.ts", _page3],
    ["src/pages/api/productos.json.ts", _page4],
    ["src/pages/blog/[slug].astro", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/capacitacion/ciberseguridad/actividad-interactiva.astro", _page7],
    ["src/pages/capacitacion/ciberseguridad/buenas-practicas.astro", _page8],
    ["src/pages/capacitacion/ciberseguridad/conclusion.astro", _page9],
    ["src/pages/capacitacion/ciberseguridad/ejemplos-phishing-inmobiliario.astro", _page10],
    ["src/pages/capacitacion/ciberseguridad/ejercicio-arrastrar-soltar.astro", _page11],
    ["src/pages/capacitacion/ciberseguridad/ejercicio-diferencias.astro", _page12],
    ["src/pages/capacitacion/ciberseguridad/evaluacion.astro", _page13],
    ["src/pages/capacitacion/ciberseguridad/introduccion.astro", _page14],
    ["src/pages/capacitacion/ciberseguridad/panorama-amenazas.astro", _page15],
    ["src/pages/capacitacion/ciberseguridad/que-es-phishing.astro", _page16],
    ["src/pages/capacitacion/ciberseguridad/que-es-spoofing.astro", _page17],
    ["src/pages/capacitacion/ciberseguridad/recursos/cheatsheet.astro", _page18],
    ["src/pages/capacitacion/ciberseguridad/role-play.astro", _page19],
    ["src/pages/capacitacion/ciberseguridad/index.astro", _page20],
    ["src/pages/capacitacion/index.astro", _page21],
    ["src/pages/contactanos.astro", _page22],
    ["src/pages/nosotros.astro", _page23],
    ["src/pages/politica-de-cookies.astro", _page24],
    ["src/pages/politica-de-privacidad.astro", _page25],
    ["src/pages/servicios/camaras-de-seguridad.astro", _page26],
    ["src/pages/servicios/cotizador.astro", _page27],
    ["src/pages/servicios/formateo-instalacion.astro", _page28],
    ["src/pages/servicios/formateo-instalacion-programas.astro", _page29],
    ["src/pages/servicios/lectores-biometricos.astro", _page30],
    ["src/pages/servicios/mantenimiento-preventivo.astro", _page31],
    ["src/pages/servicios/mantenimiento-reparacion-informatica.astro", _page32],
    ["src/pages/servicios/recuperacion-datos.astro", _page33],
    ["src/pages/servicios/redes-conectividad.astro", _page34],
    ["src/pages/servicios/soporte-tecnico.astro", _page35],
    ["src/pages/servicios/index.astro", _page36],
    ["src/pages/terminos-y-condiciones.astro", _page37],
    ["src/pages/index.astro", _page38]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "91daf77a-cae4-41be-9cb4-62e5763f7edc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
