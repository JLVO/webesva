/* empty css                                        */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../../../chunks/PresentacionLayout_C6ZT1L6L.mjs';
export { renderers } from '../../../renderers.mjs';

const $$BuenasPracticas = createComponent(($$result, $$props, $$slots) => {
  const practices = [
    {
      icon: "fa-user-shield",
      title: "Verifica el Remitente",
      text: "No conf\xEDes solo en el nombre. Revisa la direcci\xF3n de correo completa. Si parece extra\xF1a, desconf\xEDa."
    },
    {
      icon: "fa-mouse-pointer",
      title: "Piensa Antes de Hacer Clic",
      text: "Pasa el cursor sobre los enlaces para ver la URL real. Si no coincide o es sospechosa, no hagas clic."
    },
    {
      icon: "fa-exclamation-triangle",
      title: "Desconf\xEDa de la Urgencia",
      text: "Los atacantes te presionan para que act\xFAes sin pensar. T\xF3mate un momento para analizar."
    },
    {
      icon: "fa-key",
      title: "Usa Contrase\xF1as Seguras y 2FA",
      text: "Utiliza contrase\xF1as \xFAnicas y complejas. Activa la autenticaci\xF3n de dos factores (2FA) siempre que sea posible."
    },
    {
      icon: "fa-question-circle",
      title: "Si Dudas, Pregunta",
      text: "Si un correo te parece sospechoso, rep\xF3rtalo al departamento de TI o com\xE9ntalo con un compa\xF1ero."
    },
    {
      icon: "fa-laptop-code",
      title: "Mant\xE9n Todo Actualizado",
      text: "Aseg\xFArate de que tu sistema operativo, navegador y antivirus est\xE9n siempre con las \xFAltimas actualizaciones."
    }
  ];
  return renderTemplate`${renderComponent($$result, "PresentacionLayout", $$PresentacionLayout, { "pageTitle": "Buenas Pr\xE1cticas de Seguridad", "currentPage": 10, "totalPages": 12, "prevPage": "/capacitacion/ciberseguridad/role-play", "nextPage": "/capacitacion/ciberseguridad/evaluacion" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-8"> <h1 class="text-4xl font-bold text-gray-800">Buenas Prácticas de Seguridad</h1> <p class="text-lg text-gray-600 mt-2">La mejor defensa es la prevención. Adopta estos hábitos en tu rutina diaria.</p> <a href="/capacitacion/ciberseguridad/recursos/cheatsheet" target="_blank" class="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-700 transition-transform hover:scale-105"> <i class="fas fa-download mr-2"></i>
Descargar Guía Rápida en PDF
</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${practices.map((practice) => renderTemplate`<div class="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"> <div class="text-blue-600 mx-auto mb-4"> <i${addAttribute(`fas ${practice.icon} fa-3x`, "class")}></i> </div> <h3 class="text-xl font-bold text-gray-800 mb-2">${practice.title}</h3> <p class="text-gray-600">${practice.text}</p> </div>`)} </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/buenas-practicas.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/buenas-practicas.astro";
const $$url = "/capacitacion/ciberseguridad/buenas-practicas/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BuenasPracticas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
