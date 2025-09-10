import { c as createAstro, a as createComponent, r as renderHead, b as renderSlot, d as addAttribute, e as renderTemplate } from './astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                         */

const $$Astro = createAstro("https://esva.pe");
const $$PresentacionLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PresentacionLayout;
  const { pageTitle, currentPage, totalPages, prevPage, nextPage } = Astro2.props;
  const progressPercentage = Math.max(0, Math.min(100, currentPage / totalPages * 100));
  return renderTemplate`<html lang="es" data-astro-cid-lgqwud2f> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageTitle} | Capacitación ESVA</title><!-- Fuentes y Iconos --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"><link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">${renderHead()}</head> <body class="flex items-center justify-center min-h-screen p-4" data-astro-cid-lgqwud2f> <div class="slide-container" data-astro-cid-lgqwud2f> <!-- Contenido de la Diapositiva --> <main class="flex-grow p-12 overflow-y-auto" data-astro-cid-lgqwud2f> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer de la Presentación (Navegación y Progreso) --> <footer class="flex-shrink-0 bg-gray-50 border-t border-gray-200 px-8 py-3" data-astro-cid-lgqwud2f> <div class="flex items-center justify-between" data-astro-cid-lgqwud2f> <!-- Botón de Inicio/Agenda --> <a href="/capacitacion/ciberseguridad/introduccion" title="Volver a la Agenda" class="text-gray-500 hover:text-blue-600 transition-colors" data-astro-cid-lgqwud2f> <i class="fas fa-list-ul text-xl" data-astro-cid-lgqwud2f></i> </a> <!-- Navegación Prev/Next --> <div class="flex items-center gap-4" data-astro-cid-lgqwud2f> <a${addAttribute(prevPage, "href")}${addAttribute(`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${!prevPage ? "text-gray-300 bg-gray-100 cursor-not-allowed" : "text-white bg-blue-600 hover:bg-blue-700"}`, "class")} data-astro-cid-lgqwud2f> <i class="fas fa-arrow-left mr-2" data-astro-cid-lgqwud2f></i>
Anterior
</a> <a${addAttribute(nextPage, "href")}${addAttribute(`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${!nextPage ? "text-gray-300 bg-gray-100 cursor-not-allowed" : "text-white bg-blue-600 hover:bg-blue-700"}`, "class")} data-astro-cid-lgqwud2f>
Siguiente
<i class="fas fa-arrow-right ml-2" data-astro-cid-lgqwud2f></i> </a> </div> <!-- Logo --> <a href="/" title="Ir a la página principal de ESVA" class="flex items-center" data-astro-cid-lgqwud2f> <img src="/LogoEsva.svg" alt="Logo ESVA" class="h-7 w-auto" data-astro-cid-lgqwud2f> </a> </div> <!-- Barra de Progreso --> <div class="w-full bg-gray-200 rounded-full h-1.5 mt-3" data-astro-cid-lgqwud2f> <div class="bg-blue-600 h-1.5 rounded-full"${addAttribute(`width: ${progressPercentage}%`, "style")} data-astro-cid-lgqwud2f></div> </div> </footer> </div> </body></html>`;
}, "C:/Users/ZERO/Documents/webesva/src/layouts/PresentacionLayout.astro", void 0);

export { $$PresentacionLayout as $ };
