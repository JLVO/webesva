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
const $$LectoresBiometricos = createComponent(async ($$result, $$props, $$slots) => {
  const MAX_RECENT_POSTS = 3;
  const allPosts = await getCollection("blog");
  const recentPosts = allPosts.sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()).slice(0, MAX_RECENT_POSTS);
  const preguntasLectores = [
    {
      titulo: "\xBFQu\xE9 tipo de lector biom\xE9trico es mejor para mi negocio?",
      respuesta: "La elecci\xF3n ideal depende del nivel de seguridad que necesites, el n\xFAmero de empleados y el entorno de trabajo. Los de huella digital son los m\xE1s comunes y fiables, mientras que el reconocimiento facial ofrece una experiencia sin contacto, ideal para alta higiene o flujo r\xE1pido de personal."
    },
    {
      titulo: "\xBFSe puede integrar con mi sistema de planillas o contabilidad?",
      respuesta: "S\xED, la mayor\xEDa de nuestros sistemas biom\xE9tricos, especialmente los de ZKTeco, est\xE1n dise\xF1ados para integrarse f\xE1cilmente con los principales software de planillas y RRHH. Esto automatiza el c\xE1lculo de horas y reduce dr\xE1sticamente los errores manuales."
    },
    {
      titulo: "\xBFQu\xE9 tan dif\xEDcil es para los empleados aprender a usarlo?",
      respuesta: "Es sumamente f\xE1cil. El proceso de registro de un nuevo usuario toma menos de un minuto, y el marcado diario es casi instant\xE1neo. Adem\xE1s, en ESVA nos encargamos de dar una capacitaci\xF3n completa a tu personal administrativo y a los usuarios."
    },
    {
      titulo: "\xBFQu\xE9 pasa si un lector falla o se va la luz?",
      respuesta: "Nuestros equipos son de alta fiabilidad. Ofrecemos garant\xEDa completa y soporte t\xE9cnico. Adem\xE1s, muchos modelos cuentan con una bater\xEDa de respaldo interna que les permite seguir operando por horas durante un corte de energ\xEDa, sin perder registros."
    }
  ];
  return renderTemplate(_a || (_a = __template([`\xA1
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lectores Biom\xE9tricos para Empresas en Piura | ESVA</title><meta name="description" content="Moderniza el control de asistencia y acceso en tu empresa con lectores biom\xE9tricos de huella digital y reconocimiento facial en Piura. Instalaci\xF3n y configuraci\xF3n profesional con ESVA."><script async src="https://www.googletagmanager.com/gtag/js?id=G-365MN03V4H"><\/script><script>
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-365MN03V4H');
    <\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W7XKNX23');<\/script><!-- End Google Tag Manager -->`, '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7XKNX23" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', " ", ' <section class="bg-white py-16 px-6 md:px-20 text-center"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-6">La Clave para la Eficiencia y Seguridad de tu Empresa</h2> <p class="text-lg text-gray-700">\nDile adi\xF3s a los registros manuales, las tardanzas injustificadas y las tarjetas de acceso que se pierden. Con los <strong class="text-blue-700">lectores biom\xE9tricos de ESVA</strong>, la identidad de tu personal es la llave maestra. Gestiona la asistencia y el acceso a \xE1reas restringidas de forma autom\xE1tica, segura e infalible.\n</p> </div> </section> <!-- NUEVA SECCI\xD3N: Tipos de Lectores --> <section class="bg-blue-50 py-20 px-6 md:px-20"> <div class="max-w-6xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-12">Tipos de Lectores Biom\xE9tricos que Instalamos</h2> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> <!-- Lector 1: Huella Digital --> <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"> <div class="text-blue-600 mb-4"> <svg class="w-16 h-16 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 12c0 2.42-.944 4.626-2.502 6.243m-1.1-5.943a3.75 3.75 0 10-5.303-5.303 3.75 3.75 0 005.303 5.303zM5.25 12a7.5 7.5 0 0011.25-6.243M5.25 12a7.5 7.5 0 016.243-6.243"></path></svg> </div> <h3 class="text-2xl font-semibold mb-3 text-blue-800">Huella Digital</h3> <p class="text-gray-700">La soluci\xF3n m\xE1s popular y rentable. Alta precisi\xF3n y rapidez para el control de asistencia y acceso general.</p> </div> <!-- Lector 2: Reconocimiento Facial --> <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"> <div class="text-blue-600 mb-4"> <svg class="w-16 h-16 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg> </div> <h3 class="text-2xl font-semibold mb-3 text-blue-800">Reconocimiento Facial</h3> <p class="text-gray-700">M\xE1xima seguridad y conveniencia. Identificaci\xF3n sin contacto, ideal para entornos de alta higiene y para una experiencia de usuario superior.</p> </div> <!-- Lector 3: Tarjetas de Proximidad --> <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"> <div class="text-blue-600 mb-4"> <svg class="w-16 h-16 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 21z"></path></svg> </div> <h3 class="text-2xl font-semibold mb-3 text-blue-800">Tarjetas de Proximidad</h3> <p class="text-gray-700">Una opci\xF3n vers\xE1til y econ\xF3mica. Perfecta para combinar con otros m\xE9todos o para gestionar el acceso de visitantes y contratistas.</p> </div> </div> </div> </section> ', ' <!-- NUEVA SECCI\xD3N: Sectores --> <section class="bg-white py-20 px-6 md:px-20"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-blue-900">Ideal para Diversos Sectores en Piura</h2> <p class="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Nuestras soluciones se adaptan a las necesidades espec\xEDficas de cada tipo de organizaci\xF3n.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="bg-gray-50 text-center p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold text-gray-800">Oficinas y Corporativos</h3></div> <div class="bg-gray-50 text-center p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold text-gray-800">F\xE1bricas y Almacenes</h3></div> <div class="bg-gray-50 text-center p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold text-gray-800">Colegios y Centros Educativos</h3></div> <div class="bg-gray-50 text-center p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold text-gray-800">Tiendas y Retail</h3></div> <div class="bg-gray-50 text-center p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold text-gray-800">Cl\xEDnicas y Centros de Salud</h3></div> <div class="bg-gray-50 text-center p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold text-gray-800">Gimnasios y Clubes</h3></div> <div class="bg-gray-50 text-center p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold text-gray-800">Restaurantes y Hoteles</h3></div> <div class="bg-gray-50 text-center p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold text-gray-800">Condominios y Residenciales</h3></div> </div> </div> </section> <!-- NUEVA SECCI\xD3N: Marcas --> <section class="bg-blue-50 py-16"> <div class="max-w-5xl mx-auto px-6 text-center"> <h2 class="text-3xl font-bold text-gray-800 mb-4">Trabajamos con ZKTeco: L\xEDder Mundial en Biometr\xEDa</h2> <p class="text-gray-600 mb-10">Para asegurar la fiabilidad, innovaci\xF3n y el mejor rendimiento, confiamos en el l\xEDder indiscutible del sector.</p> <div class="flex justify-center items-center gap-12 md:gap-16 flex-wrap"> <img src="/LogoZKTecoNuevo.svg" alt="Logo ZKTeco" class="h-24 opacity-90 hover:opacity-100 transition-opacity"> </div> </div> </section> <!-- Secci\xF3n del Blog --> ', " ", " ", " ", " </body>"])), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "Hero", $$Hero, { "title": "Control de Acceso y Asistencia con Lectores Biom\xE9tricos", "subtitle": "Optimiza la gesti\xF3n de tu personal y refuerza la seguridad de tus instalaciones con tecnolog\xEDa biom\xE9trica de \xFAltima generaci\xF3n en Piura.", "imageUrl": "/imagenes/blog/integracion-biometricos-camaras-esva.jpg", "buttonText": "Solicita una Demostraci\xF3n", "buttonLink": "Escr\xEDbenos por WhatsApp", "linkwhatsapp": "https://wa.me/51985834886?text=Hola,%20estoy%20interesado%20en%20lectores%20biom\xE9tricos%20para%20mi%20empresa.%20\xBFPodr\xEDan%20ayudarme?" }), renderComponent($$result, "LlamadaAction", $$LlamadaAction, { "title": "\xBFQuieres modernizar el control en tu empresa?", "subtitle": "Descubre c\xF3mo nuestros sistemas biom\xE9tricos pueden ahorrarte tiempo, dinero y mejorar la seguridad. Solicita una asesor\xEDa gratuita.", "buttonTextContato": "Cont\xE1ctanos", "buttonLinkLlamada": "Ll\xE1manos Ahora", "linkwhatsapp": "https://wa.me/51985834886?text=Hola,%20necesito%20informaci\xF3n%20sobre%20los%20lectores%20biom\xE9tricos%20de%20ESVA.", "textobotonwhatsapp": "WhatsApp" }), recentPosts.length > 0 && renderTemplate`<section class="bg-white py-16 px-4"> <div class="max-w-6xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
Aprende Más en Nuestro Blog
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${recentPosts.map((post) => renderTemplate`<article class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"> ${post.data.image?.url && renderTemplate`<a${addAttribute(`/blog/${post.slug}/`, "href")} class="block aspect-video overflow-hidden group"> <img${addAttribute(typeof post.data.image.url === "string" ? post.data.image.url : post.data.image.url, "src")}${addAttribute(post.data.image.alt || post.data.title, "alt")} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"> </a>`} <div class="p-6 flex flex-col flex-grow"> <h3 class="text-xl font-semibold mb-3 text-gray-800"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="hover:text-blue-600 transition duration-300"> ${post.data.title} </a> </h3> ${post.data.description && renderTemplate`<p class="text-gray-600 text-sm mb-4 flex-grow">${post.data.description.slice(0, 100) + (post.data.description.length > 100 ? "..." : "")}</p>`} <p class="text-xs text-gray-500 mb-4"> ${new Date(post.data.pubDate).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })} </p> <div class="mt-auto pt-2"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-300">
Leer más <span aria-hidden="true" class="ml-1">&rarr;</span> </a> </div> </div> </article>`)} </div> ${allPosts.length > MAX_RECENT_POSTS && renderTemplate`<div class="text-center mt-12"> <a href="/blog" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
Ver todos los posts
</a> </div>`} </div> </section>`, renderComponent($$result, "PreguntasFrecuentes", $$PreguntasFrecuentes, { "preguntas": preguntasLectores }), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, {}));
}, "C:/Users/ZERO/Documents/webesva/src/pages/servicios/lectores-biometricos.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/servicios/lectores-biometricos.astro";
const $$url = "/servicios/lectores-biometricos/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LectoresBiometricos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
