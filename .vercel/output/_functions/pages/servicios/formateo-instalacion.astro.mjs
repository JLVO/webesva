/* empty css                                     */
import { a as createComponent, e as renderTemplate, f as renderComponent, d as addAttribute, r as renderHead } from '../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Navbar } from '../../chunks/Footer_jqqEqqi6.mjs';
import { $ as $$LlamadaAction, a as $$Hero } from '../../chunks/LlamadaAction_ByRnDu1g.mjs';
import { g as getCollection } from '../../chunks/_astro_content_RGQbSOIc.mjs';
/* empty css                                     */
import { $ as $$PreguntasFrecuentes } from '../../chunks/PreguntasFrecuentes_DDGviUa3.mjs';
import { $ as $$WhatsAppButton } from '../../chunks/WhatsAppButton_EUvBSPkM.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FormateoInstalacion = createComponent(async ($$result, $$props, $$slots) => {
  const MAX_RECENT_POSTS = 3;
  const allPosts = await getCollection("blog");
  const recentPosts = allPosts.sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()).slice(0, MAX_RECENT_POSTS);
  const preguntasFormateo = [
    {
      titulo: "\xBFPierdo mis archivos al formatear?",
      respuesta: "Antes de formatear, realizamos una copia de seguridad de tus archivos importantes si as\xED lo solicitas. Tambi\xE9n podemos ayudarte a recuperar informaci\xF3n si tu sistema a\xFAn es accesible."
    },
    {
      titulo: "\xBFQu\xE9 programas incluyen en la instalaci\xF3n?",
      respuesta: "Incluimos programas esenciales como navegador web, suite de ofim\xE1tica, antivirus, reproductores multimedia, y m\xE1s. Podemos adaptarnos a tus necesidades."
    },
    {
      titulo: "\xBFCu\xE1nto tiempo tarda el servicio?",
      respuesta: "El tiempo puede variar seg\xFAn el equipo, pero generalmente el servicio se completa entre 1 y 2 horas. Ofrecemos atenci\xF3n a domicilio o en nuestras oficinas."
    },
    {
      titulo: "\xBFPueden instalar Windows con licencia?",
      respuesta: "S\xED, ofrecemos instalaci\xF3n con licencias v\xE1lidas y tambi\xE9n podemos orientarte sobre la activaci\xF3n legal de tu sistema operativo."
    }
  ];
  return renderTemplate(_a || (_a = __template([`\xA1
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Formateo de PC y Laptops en Piura | Instalaci\xF3n de Windows | ESVA</title><meta name="description" content="\xBFTu PC o laptop est\xE1 muy lenta? Con nuestro servicio de formateo en Piura, la dejamos como nueva. Instalaci\xF3n limpia de Windows, programas esenciales y respaldo de archivos."><script async src="https://www.googletagmanager.com/gtag/js?id=G-365MN03V4H"><\/script><script>
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-365MN03V4H');
    <\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W7XKNX23');<\/script><!-- End Google Tag Manager -->`, '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7XKNX23" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', " ", ' <section class="bg-white py-16 px-6 md:px-20 text-center"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Recupera la agilidad de tu computadora</h2> <p class="text-lg text-gray-700">\n\xBFTu equipo est\xE1 lento, lleno de errores o programas innecesarios? Nuestro servicio de <strong class="text-blue-700">formateo e instalaci\xF3n</strong> es la soluci\xF3n. \n      Reinstalamos tu sistema operativo desde cero, eliminamos virus y configuramos los programas esenciales \n      para que vuelvas a trabajar con total fluidez.\n</p> </div> </section> <section class="bg-blue-50 py-16 px-6 md:px-20"> <div class="max-w-6xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-12">\xBFQu\xE9 incluye nuestro servicio?</h2> <div class="grid gap-8 md:grid-cols-3"> <!-- Tarjeta 1 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"> <div class="text-blue-800 mb-4"> <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"></path> </svg> </div> <h3 class="text-xl font-semibold mb-2 text-blue-800">Formateo completo del equipo</h3> <p class="text-gray-600">Eliminamos virus, archivos innecesarios y todo lo que frene el rendimiento.</p> </div> <!-- Tarjeta 2 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"> <div class="text-blue-800 mb-4"> <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6M12 9v6"></path> </svg> </div> <h3 class="text-xl font-semibold mb-2 text-blue-800">Instalaci\xF3n de sistema operativo</h3> <p class="text-gray-600">Windows, Linux u otro sistema. Siempre con licencias v\xE1lidas o versiones legales.</p> </div> <!-- Tarjeta 3 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"> <div class="text-blue-800 mb-4"> <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12-4.5v9a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 011 16.5v-9A2.5 2.5 0 013.5 5h15A2.5 2.5 0 0121 7.5z"></path> </svg> </div> <h3 class="text-xl font-semibold mb-2 text-blue-800">Programas esenciales</h3> <p class="text-gray-600">Instalamos navegadores, ofim\xE1tica, antivirus, reproductores y m\xE1s.</p> </div> </div> </div> </section> ', ' <section class="bg-blue-50 py-20 px-6 md:px-20"> <div class="max-w-6xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-12">\xBFPor qu\xE9 elegir nuestro servicio de formateo?</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"> <!-- Beneficio 1 --> <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"> <h3 class="text-xl font-semibold text-blue-900 mb-2">Instalaci\xF3n limpia y optimizada</h3> <p class="text-gray-700">Te entregamos un sistema operativo limpio, sin archivos basura ni programas innecesarios, para un rendimiento superior desde el primer d\xEDa.</p> </div> <!-- Beneficio 2 --> <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"> <h3 class="text-xl font-semibold text-blue-900 mb-2">Configuraci\xF3n personalizada</h3> <p class="text-gray-700">Adaptamos el sistema a tus necesidades espec\xEDficas: idioma, programas, cuentas y accesibilidad.</p> </div> <!-- Beneficio 3 --> <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"> <h3 class="text-xl font-semibold text-blue-900 mb-2">Protecci\xF3n desde el inicio</h3> <p class="text-gray-700">Instalamos antivirus actualizado y configuramos medidas de seguridad para proteger tus datos desde el primer momento.</p> </div> <!-- Beneficio 4 --> <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"> <h3 class="text-xl font-semibold text-blue-800 mb-2">Respaldo de informaci\xF3n</h3> <p class="text-gray-700">Si lo necesitas, realizamos un respaldo seguro de tus archivos antes del formateo y los restauramos tras la instalaci\xF3n.</p> </div> <!-- Beneficio 5 --> <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"> <h3 class="text-xl font-semibold text-blue-900 mb-2">Atenci\xF3n r\xE1pida y garantizada</h3> <p class="text-gray-700">Realizamos el servicio en menos de 2 horas, con garant\xEDa y soporte t\xE9cnico post-instalaci\xF3n.</p> </div> <!-- Beneficio 6 --> <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"> <h3 class="text-xl font-semibold text-blue-900 mb-2">Soporte profesional en todo momento</h3> <p class="text-gray-700">Te acompa\xF1amos antes, durante y despu\xE9s del servicio. \xBFTienes dudas? Siempre estamos disponibles por WhatsApp o llamada directa.</p> </div> </div> </div> </section> <!-- Secci\xF3n del Blog --> ', " ", " ", " ", " </body>"])), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "Hero", $$Hero, { "title": "Formateo e Instalaci\xF3n de Sistemas y Programas", "subtitle": "Devuelve la velocidad y estabilidad a tus equipos. Instalamos sistemas operativos y programas esenciales con configuraci\xF3n personalizada para hogares y empresas.", "imageUrl": "/TecnicoFormateoEsva.jpg", "buttonText": "Solicita tu Servicio", "buttonLink": "Escr\xEDbenos por WhatsApp", "linkwhatsapp": "https://wa.me/51985834886?text=Hola,%20necesito%20el%20servicio%20de%20formateo%20e%20instalaci\xF3n%20de%20ESVA.%20\xBFMe%20pueden%20dar%20m\xE1s%20informaci\xF3n?" }), renderComponent($$result, "LlamadaAction", $$LlamadaAction, { "title": "\xBFTu computadora necesita un nuevo comienzo?", "subtitle": "No esperes a que el sistema falle por completo. Con nuestro servicio de formateo e instalaci\xF3n, tendr\xE1s tu equipo funcionando como nuevo, r\xE1pido y sin complicaciones.", "buttonTextContato": "Cont\xE1ctanos", "buttonLinkLlamada": "Ll\xE1manos Ahora", "linkwhatsapp": "https://wa.me/51985834886?text=Hola,%20necesito%20el%20servicio%20de%20formateo%20e%20instalaci\xF3n%20de%20sistema%20operativo%20con%20ESVA.", "textobotonwhatsapp": "WhatsApp" }), recentPosts.length > 0 && renderTemplate`<section class="bg-slate-50 py-16 px-4"> <div class="max-w-6xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
Últimas Entradas de Nuestro Blog
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${recentPosts.map((post) => renderTemplate`<article class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"> ${post.data.image?.url && renderTemplate`<a${addAttribute(`/blog/${post.slug}/`, "href")} class="block aspect-video overflow-hidden group"> <img${addAttribute(typeof post.data.image.url === "string" ? post.data.image.url : post.data.image.url, "src")}${addAttribute(post.data.image.alt || post.data.title, "alt")} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"> </a>`} <div class="p-6 flex flex-col flex-grow"> <h3 class="text-xl font-semibold mb-3 text-gray-800"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="hover:text-blue-600 transition duration-300"> ${post.data.title} </a> </h3> ${post.data.description && renderTemplate`<p class="text-gray-600 text-sm mb-4 flex-grow">${post.data.description.slice(0, 100) + (post.data.description.length > 100 ? "..." : "")}</p>`} <p class="text-xs text-gray-500 mb-4"> ${new Date(post.data.pubDate).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })} </p> <div class="mt-auto pt-2"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-300">
Leer más <span aria-hidden="true" class="ml-1">&rarr;</span> </a> </div> </div> </article>`)} </div> ${allPosts.length > MAX_RECENT_POSTS && renderTemplate`<div class="text-center mt-12"> <a href="/blog" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
Ver todos los posts
</a> </div>`} </div> </section>`, renderComponent($$result, "PreguntasFrecuentes", $$PreguntasFrecuentes, { "preguntas": preguntasFormateo }), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, {}));
}, "C:/Users/ZERO/Documents/webesva/src/pages/servicios/formateo-instalacion.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/servicios/formateo-instalacion.astro";
const $$url = "/servicios/formateo-instalacion/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FormateoInstalacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
