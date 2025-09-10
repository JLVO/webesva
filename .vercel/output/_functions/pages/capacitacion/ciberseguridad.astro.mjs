/* empty css                                     */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DrspBrkT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Capacitaci\xF3n en Ciberseguridad", "metaDescription": "Capacitaci\xF3n interactiva sobre phishing y spoofing para empleados del sector inmobiliario." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="container mx-auto px-6 py-16 text-center"> <div class="mx-auto max-w-lg"> <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-3xl">
Capacitación en Ciberseguridad
</h1> <p class="mt-6 text-gray-500 dark:text-gray-300">
Bienvenido a la capacitación sobre <strong class="text-blue-500">Phishing y Spoofing</strong>. Aprenderás a identificar y protegerte de las amenazas cibernéticas más comunes en el sector inmobiliario de una manera dinámica y entretenida.
</p> <p class="mt-4 text-gray-500 dark:text-gray-300">
Duración estimada: <strong>45-60 minutos</strong>.
</p> <a href="/capacitacion/ciberseguridad/introduccion" class="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
Empezar Capacitación
</a> <p class="mt-3 text-sm text-gray-400">¡Prepárate para fortalecer tus defensas!</p> </div> </div> </section> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/index.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/index.astro";
const $$url = "/capacitacion/ciberseguridad/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
