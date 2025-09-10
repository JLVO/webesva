/* empty css                                  */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_RGQbSOIc.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DrspBrkT.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog de ESVA" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-8 text-center">Nuestro Blog</h1> <ul class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${posts.map((post) => renderTemplate`<li class="bg-white rounded-lg shadow-md overflow-hidden"> <a${addAttribute(`/blog/${post.slug}/`, "href")}> ${post.data.image && renderTemplate`<img${addAttribute(post.data.image.url, "src")}${addAttribute(post.data.image.alt, "alt")} class="w-full h-48 object-cover">`} <div class="p-6"> <h2 class="text-2xl font-bold mb-2">${post.data.title}</h2> <p class="text-gray-700 mb-4">${post.data.description}</p> <span class="text-sm text-gray-500">${post.data.pubDate.toLocaleDateString()}</span> </div> </a> </li>`)} </ul> </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/blog/index.astro";
const $$url = "/blog/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
