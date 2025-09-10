/* empty css                                        */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../../../chunks/PresentacionLayout_C6ZT1L6L.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Conclusion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PresentacionLayout", $$PresentacionLayout, { "pageTitle": "Conclusi\xF3n de la Capacitaci\xF3n", "currentPage": 12, "totalPages": 12, "prevPage": "/capacitacion/ciberseguridad/evaluacion" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center flex flex-col justify-center items-center h-full"> <div class="text-blue-600 mb-4"> <i class="fas fa-trophy fa-5x"></i> </div> <h1 class="text-5xl font-bold text-gray-800">¡Felicitaciones!</h1> <p class="text-xl text-gray-600 mt-4 max-w-3xl">
Has completado la capacitación. Lo que has aprendido hoy es fundamental para proteger a nuestros clientes, a la empresa y a ti mismo.
</p> <div class="mt-8 p-6 border-2 border-blue-500 rounded-lg bg-blue-50 max-w-xl"> <h2 class="text-2xl font-bold text-blue-800">Tu Nueva Regla de Oro:</h2> <p class="mt-2 text-3xl font-semibold text-gray-700 tracking-wider">
Parar. Pensar. Verificar.
</p> </div> <p class="mt-8 text-lg text-gray-600">
El último paso es completar la evaluación final.
</p> </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/conclusion.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/conclusion.astro";
const $$url = "/capacitacion/ciberseguridad/conclusion/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Conclusion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
