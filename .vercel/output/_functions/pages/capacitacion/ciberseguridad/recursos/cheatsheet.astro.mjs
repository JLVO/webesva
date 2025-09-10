/* empty css                                           */
import { c as createAstro, a as createComponent, h as renderScript, r as renderHead, b as renderSlot, e as renderTemplate, f as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                               */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://esva.pe");
const $$PrintLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrintLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-6n35zacg> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageTitle}</title>${renderScript($$result, "C:/Users/ZERO/Documents/webesva/src/layouts/PrintLayout.astro?astro&type=script&index=0&lang.ts")}<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"><link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">${renderHead()}</head> <body class="bg-white" data-astro-cid-6n35zacg> <main data-astro-cid-6n35zacg> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/ZERO/Documents/webesva/src/layouts/PrintLayout.astro", void 0);

const $$Cheatsheet = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "PrintLayout", $$PrintLayout, { "pageTitle": "Gu\xEDa R\xE1pida de Ciberseguridad" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-8 max-w-4xl mx-auto"> <header class="flex items-center justify-between pb-4 border-b-2 border-gray-800"> <div> <h1 class="text-3xl font-bold text-gray-900">Guía Rápida de Ciberseguridad</h1> <p class="text-gray-600">Tus 6 hábitos de defensa contra el phishing y el fraude.</p> </div> <img src="/LogoESVA.png" alt="Logo ESVA" class="h-12"> </header> <main class="mt-8 grid grid-cols-2 gap-x-8 gap-y-6"> ${practices.map((practice) => renderTemplate`<div class="flex items-start"> <div class="text-blue-600 mr-4 mt-1"> <i${addAttribute(`fas ${practice.icon} fa-2x w-8 text-center`, "class")}></i> </div> <div> <h2 class="text-lg font-bold text-gray-800">${practice.title}</h2> <p class="text-gray-700">${practice.text}</p> </div> </div>`)} </main> <footer class="mt-12 text-center border-t pt-4"> <p class="text-sm text-gray-500">Recurso de capacitación interna de ESVA. Mantente alerta, mantente seguro.</p> </footer> <div class="no-print fixed bottom-4 right-4"> <button onclick="window.print()" class="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"> <i class="fas fa-print"></i> <span>Imprimir o Guardar como PDF</span> </button> </div> </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/recursos/cheatsheet.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/recursos/cheatsheet.astro";
const $$url = "/capacitacion/ciberseguridad/recursos/cheatsheet/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cheatsheet,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
