/* empty css                                        */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../../../chunks/PresentacionLayout_C6ZT1L6L.mjs';
/* empty css                                              */
export { renderers } from '../../../renderers.mjs';

const $$Introduccion = createComponent(($$result, $$props, $$slots) => {
  const styleMap = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-700" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    teal: { bg: "bg-teal-100", text: "text-teal-600" }
  };
  const agendaItems = [
    {
      icon: "fa-chart-line",
      color: "blue",
      title: "Panorama de amenazas",
      desc: "Estad\xEDsticas y tendencias actuales",
      time: "5 min",
      link: "/capacitacion/ciberseguridad/panorama-amenazas"
    },
    {
      icon: "fa-fish",
      color: "orange",
      title: "\xBFQu\xE9 es el phishing?",
      desc: "Conceptos fundamentales y video",
      time: "8 min",
      link: "/capacitacion/ciberseguridad/que-es-phishing"
    },
    {
      icon: "fa-building",
      color: "yellow",
      title: "Casos reales del sector",
      desc: "An\xE1lisis de incidentes inmobiliarios",
      time: "8 min",
      link: "/capacitacion/ciberseguridad/ejemplos-phishing-inmobiliario"
    },
    {
      icon: "fa-mask",
      color: "red",
      title: "Spoofing explicado",
      desc: "T\xE9cnicas de suplantaci\xF3n digital",
      time: "7 min",
      link: "/capacitacion/ciberseguridad/que-es-spoofing"
    },
    {
      icon: "fa-search",
      color: "purple",
      title: "Detective de emails",
      desc: "Actividad interactiva",
      time: "10 min",
      link: "/capacitacion/ciberseguridad/actividad-interactiva"
    },
    {
      icon: "fa-hand-pointer",
      // New icon for drag and drop
      color: "teal",
      // New color
      title: "Ejercicio: Arrastrar y Soltar",
      desc: "Identifica elementos de phishing",
      time: "10 min",
      link: "/capacitacion/ciberseguridad/ejercicio-arrastrar-soltar"
    },
    {
      icon: "fa-eye",
      // New icon for spot the difference
      color: "orange",
      // New color
      title: "Ejercicio: Encuentra las Diferencias",
      desc: "Compara sitios web leg\xEDtimos y falsos",
      time: "10 min",
      link: "/capacitacion/ciberseguridad/ejercicio-diferencias"
    },
    {
      icon: "fa-users",
      color: "green",
      title: "Role Play",
      desc: "Simulaci\xF3n de ataques y defensas",
      time: "10 min",
      link: "/capacitacion/ciberseguridad/role-play"
    },
    {
      icon: "fa-shield-alt",
      color: "blue",
      title: "Mejores pr\xE1cticas",
      desc: "Protocolos de prevenci\xF3n y defensa",
      time: "7 min",
      link: "/capacitacion/ciberseguridad/buenas-practicas"
    },
    {
      icon: "fa-check-circle",
      color: "teal",
      title: "Preguntas y evaluaci\xF3n",
      desc: "Cierre y feedback",
      time: "5 min",
      link: "/capacitacion/ciberseguridad/evaluacion"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PresentacionLayout", $$PresentacionLayout, { "pageTitle": "Agenda de la Capacitaci\xF3n", "currentPage": 1, "totalPages": 12, "nextPage": "/capacitacion/ciberseguridad/panorama-amenazas", "data-astro-cid-aqxp6b32": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mb-8 text-center" data-astro-cid-aqxp6b32> <h1 class="text-4xl font-bold text-gray-800" data-astro-cid-aqxp6b32>Agenda de la Capacitación</h1> <p class="text-lg text-gray-600 mt-2" data-astro-cid-aqxp6b32>Duración total aproximada: 60 minutos</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5" data-astro-cid-aqxp6b32> ${agendaItems.map((item) => {
    const styles = styleMap[item.color] || styleMap.blue;
    return renderTemplate`<a${addAttribute(item.link, "href")}${addAttribute(`agenda-item flex items-center bg-white rounded-lg shadow-sm p-4 ${item.link !== "#" ? "cursor-pointer" : "cursor-not-allowed opacity-60"}`, "class")} data-astro-cid-aqxp6b32> <div${addAttribute(`module-icon ${styles.bg} ${styles.text} mr-4`, "class")} data-astro-cid-aqxp6b32> <i${addAttribute(`fas ${item.icon} text-lg`, "class")} data-astro-cid-aqxp6b32></i> </div> <div class="flex-grow" data-astro-cid-aqxp6b32> <h3 class="text-lg font-semibold text-gray-900" data-astro-cid-aqxp6b32>${item.title}</h3> <p class="text-sm text-gray-600" data-astro-cid-aqxp6b32>${item.desc}</p> </div> <span class="time-badge px-3 py-1 text-xs font-bold ml-3 whitespace-nowrap" data-astro-cid-aqxp6b32>${item.time}</span> </a>`;
  })} </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/introduccion.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/introduccion.astro";
const $$url = "/capacitacion/ciberseguridad/introduccion/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Introduccion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
