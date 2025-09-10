import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderTemplate } from './astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://esva.pe");
const $$PreguntasFrecuentes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PreguntasFrecuentes;
  const { preguntas = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-16 px-6 md:px-20"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
Preguntas Frecuentes
</h2> <div class="space-y-4"> ${preguntas.map((pregunta, index) => {
    return renderTemplate`<details class="bg-blue-50 p-6 rounded-lg shadow-sm group open:shadow-md"> <summary class="font-semibold text-blue-900 cursor-pointer text-lg"> ${pregunta.titulo} </summary> <p class="mt-4 text-gray-700">${pregunta.respuesta}</p> </details>`;
  })} </div> </div> </section>`;
}, "C:/Users/ZERO/Documents/webesva/src/components/PreguntasFrecuentes.astro", void 0);

export { $$PreguntasFrecuentes as $ };
