/* empty css                                        */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead, h as renderScript } from '../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../../../chunks/PresentacionLayout_C6ZT1L6L.mjs';
export { renderers } from '../../../renderers.mjs';

const $$EjemplosPhishingInmobiliario = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PresentacionLayout", $$PresentacionLayout, { "pageTitle": "Casos Reales de Phishing", "currentPage": 4, "totalPages": 12, "prevPage": "/capacitacion/ciberseguridad/que-es-phishing", "nextPage": "/capacitacion/ciberseguridad/que-es-spoofing" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-8"> <h1 class="text-4xl font-bold text-gray-800">Casos Reales del Sector Inmobiliario</h1> <p class="text-lg text-gray-600 mt-2">Los atacantes usan señuelos específicos. Analiza estos ejemplos y descubre las pistas.</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <!-- Ejemplo 1: Oferta Urgente --> <div class="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col"> <h2 class="text-xl font-bold text-gray-800 mb-4">Ejemplo 1: La "Oferta de Cliente" Urgente</h2> <div class="font-sans text-sm text-gray-700 bg-white p-4 rounded-md border flex-grow"> <p><strong>De:</strong> info.clientes.premium@gmail.com</p> <p><strong>Asunto:</strong> URGENTE: Oferta por propiedad de lujo</p> <hr class="my-2"> <p>Estimado agente,</p> <p class="mt-2">Represento a un inversor extranjero muy interesado en adquirir una propiedad de lujo. Queremos cerrar la operación esta misma semana. He adjuntado un documento con los detalles.</p> <div class="mt-3 p-2 bg-red-100 border border-red-300 rounded-md flex items-center gap-2"> <i class="fas fa-file-archive text-red-600"></i> <span class="font-mono text-xs">Documento_Propiedad.zip</span> </div> </div> <div class="mt-4 text-center"> <button data-toggle="#pistas-1" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"> <i class="fas fa-search mr-2"></i>Revelar Pistas
</button> </div> <div id="pistas-1" class="hidden mt-4 prose prose-sm max-w-none"> <h3 class="text-red-600 font-semibold">Señales de Alerta:</h3> <ul class="text-gray-700"> <li><strong>Remitente genérico:</strong> Un inversor serio no usaría una cuenta de Gmail.</li> <li><strong>Sentido de urgencia:</strong> La presión por actuar "esta semana" es una táctica de manipulación.</li> <li><strong>Adjunto peligroso:</strong> Nunca abras archivos \`.zip\` no solicitados.</li> </ul> </div> </div> <!-- Ejemplo 2: Falsa Firma de Contrato --> <div class="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col"> <h2 class="text-xl font-bold text-gray-800 mb-4">Ejemplo 2: La "Firma de Contrato" Falsa</h2> <div class="font-sans text-sm text-gray-700 bg-white p-4 rounded-md border flex-grow"> <p><strong>De:</strong> notificaciones@docusign-contracts.co</p> <p><strong>Asunto:</strong> Solicitud de firma: Contrato de Arras 12345</p> <hr class="my-2"> <p>Hola,</p> <p class="mt-2">Se ha compartido un documento para firmar. Por favor, revisa y firma en el siguiente enlace. El acceso expirará en 24 horas.</p> <a href="#" class="text-blue-600 underline break-all">http://docusign-review.important-docs.com/login</a> </div> <div class="mt-4 text-center"> <button data-toggle="#pistas-2" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"> <i class="fas fa-search mr-2"></i>Revelar Pistas
</button> </div> <div id="pistas-2" class="hidden mt-4 prose prose-sm max-w-none"> <h3 class="text-red-600 font-semibold">Señales de Alerta:</h3> <ul class="text-gray-700"> <li><strong>Dominio incorrecto:</strong> El correo no es de \`docusign.com\`, sino de un dominio falso.</li> <li><strong>Enlace sospechoso:</strong> La URL del enlace no es la oficial de DocuSign.</li> <li><strong>Falsa urgencia:</strong> La amenaza de que "expirará en 24 horas" busca que actúes sin verificar.</li> </ul> </div> </div> </div> ${renderScript($$result2, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/ejemplos-phishing-inmobiliario.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/ejemplos-phishing-inmobiliario.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/ejemplos-phishing-inmobiliario.astro";
const $$url = "/capacitacion/ciberseguridad/ejemplos-phishing-inmobiliario/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EjemplosPhishingInmobiliario,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
