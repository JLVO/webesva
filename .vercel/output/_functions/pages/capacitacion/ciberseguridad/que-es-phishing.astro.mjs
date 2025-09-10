/* empty css                                        */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../../../chunks/PresentacionLayout_C6ZT1L6L.mjs';
export { renderers } from '../../../renderers.mjs';

const $$QueEsPhishing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PresentacionLayout", $$PresentacionLayout, { "pageTitle": "\xBFQu\xE9 es el Phishing?", "currentPage": 3, "totalPages": 12, "prevPage": "/capacitacion/ciberseguridad/panorama-amenazas", "nextPage": "/capacitacion/ciberseguridad/ejemplos-phishing-inmobiliario" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <!-- Columna de Texto --> <div class="prose prose-lg max-w-none"> <h1 class="text-4xl font-bold text-gray-800">¿Qué es el Phishing?</h1> <p>
El <strong class="text-blue-600">phishing</strong> es una técnica de ciberdelincuencia que utiliza el fraude, el engaño y el señuelo para manipular a sus víctimas y hacer que revelen información personal y financiera confidencial.
</p> <h3 class="font-semibold">Señales de Alerta Clave:</h3> <ul> <li><strong>Sentido de urgencia:</strong> Te presionan para que actúes rápido.</li> <li><strong>Remitente sospechoso:</strong> El correo no coincide con la empresa que dice ser.</li> <li><strong>Enlaces y adjuntos:</strong> Te piden hacer clic o descargar archivos inesperados.</li> <li><strong>Errores gramaticales:</strong> El mensaje está mal redactado.</li> <li><strong>Solicitud de datos sensibles:</strong> Te piden contraseñas o datos bancarios.</li> </ul> </div> <!-- Columna de Video --> <div class="aspect-w-16 aspect-h-9"> <!-- 
        REEMPLAZAR ESTE ENLACE: 
        Aquí puedes poner el enlace de tu video de YouTube. 
      --> <iframe class="w-full h-full rounded-lg shadow-2xl" src="https://www.youtube-nocookie.com/embed/8ktaGnFkOoc?si=Fa2gUkaxu6DdTS81&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div> </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/que-es-phishing.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/que-es-phishing.astro";
const $$url = "/capacitacion/ciberseguridad/que-es-phishing/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QueEsPhishing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
