/* empty css                                  */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DrspBrkT.mjs';
import '../chunks/index_DfOMS8cV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DjhToR4a.mjs';
import { L as LogoEsva } from '../chunks/Footer_jqqEqqi6.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404: No encontrado", "description": "P\xE1gina no encontrada. Parece que te has perdido." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center justify-center h-screen text-center"> <div class="mb-8"> <a href="/"> ${renderComponent($$result2, "Image", $$Image, { "src": LogoEsva, "alt": "Logo de ESVA", "width": "200" })} </a> </div> <h1 class="text-6xl font-bold text-gray-800 dark:text-white">404</h1> <h2 class="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
Página No Encontrada
</h2> <p class="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
Lo sentimos, pero la página que buscas no existe o ha sido movida.
</p> <a href="/" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
Volver al Inicio
</a> </main> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/404.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/404.astro";
const $$url = "/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
