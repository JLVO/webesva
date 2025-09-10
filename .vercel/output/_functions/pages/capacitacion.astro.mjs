/* empty css                                  */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DrspBrkT.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Nuestras Capacitaciones", "description": "Descubre nuestras capacitaciones en ciberseguridad y m\xE1s." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto pt-1 pb-8 px-6"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Nuestras Capacitaciones</h1> <p class="text-lg text-gray-600 mt-2">
Descubre programas de formación diseñados para fortalecer tus conocimientos en ciberseguridad y tecnología.
</p> </header> <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">  <a href="/capacitacion/ciberseguridad/" class="block"> <article class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"> <div class="aspect-video overflow-hidden group"> <img src="/imagenes/blog/ciberseguridad-empresas.jpg" alt="Capacitación en Ciberseguridad" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"> </div> <div class="p-6 flex flex-col flex-grow"> <h2 class="text-xl font-semibold mb-3 text-gray-800"> <span class="hover:text-blue-600 transition duration-300">Ciberseguridad Esencial para Empresas</span> </h2> <p class="text-gray-600 text-sm mb-4 flex-grow">
Aprende a proteger tu negocio y tus datos de las amenazas cibernéticas más comunes. 
              Desde phishing hasta ransomware, esta capacitación te dará las herramientas para una defensa sólida.
</p> <div class="mt-auto pt-2"> <span class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-300">
Empezar Capacitación <span aria-hidden="true" class="ml-1">&rarr;</span> </span> </div> </div> </article> </a>  </div> </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/index.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/index.astro";
const $$url = "/capacitacion/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
