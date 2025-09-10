/* empty css                                        */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../../../chunks/PresentacionLayout_C6ZT1L6L.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../../../renderers.mjs';

const differences = [
  { id: "d1", x: 57, y: 0, width: 200, height: 20, description: "URL sospechosa" },
  { id: "d2", x: 20, y: 0, width: 35, height: 20, description: "Falta de candado de seguridad" },
  { id: "d3", x: 70, y: 23, width: 80, height: 20, description: "Error ortográfico en el texto" }
];
function SpotTheDifference() {
  const [foundDifferences, setFoundDifferences] = useState([]);
  const [message, setMessage] = useState("");
  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let clickedOnDifference = false;
    let newFoundDifferences = [...foundDifferences];
    let currentMessage = "";
    for (const diff of differences) {
      if (x >= diff.x && x <= diff.x + diff.width && y >= diff.y && y <= diff.y + diff.height) {
        clickedOnDifference = true;
        if (!newFoundDifferences.includes(diff.id)) {
          newFoundDifferences.push(diff.id);
          currentMessage = `¡Encontraste una diferencia! ${diff.description}`;
        } else {
          currentMessage = `Ya encontraste esta diferencia: ${diff.description}`;
        }
        break;
      }
    }
    if (!clickedOnDifference) {
      currentMessage = "No hay diferencia aquí. ¡Sigue buscando!";
    }
    setFoundDifferences(newFoundDifferences);
    setMessage(currentMessage);
    if (newFoundDifferences.length === differences.length) {
      setMessage("¡Felicidades! Has encontrado todas las diferencias.");
    }
  };
  const resetExercise = () => {
    setFoundDifferences([]);
    setMessage("");
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-lg shadow-lg space-y-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 text-center mb-6", children: "Encuentra las Diferencias en la Página de Login" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-center mb-4", children: "Haz clic en las áreas de la imagen de la derecha que creas que son diferentes o sospechosas." }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative border-2 border-gray-300 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: "/imagenes/login-legitimo.webp", alt: "Página de Login Legítima", className: "w-full h-auto" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-xl font-bold", children: "Página Legítima" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative border-2 border-blue-500 rounded-lg overflow-hidden cursor-pointer", onClick: handleClick, children: [
        /* @__PURE__ */ jsx("img", { src: "/imagenes/login-phishing.webp", alt: "Página de Login con Diferencias", className: "w-full h-auto" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-800 bg-opacity-50 text-white text-xl font-bold", children: "Página con Diferencias" }),
        differences.map((diff) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute border-2 border-transparent rounded-md
                ${foundDifferences.includes(diff.id) ? "border-green-500 bg-green-500 bg-opacity-30" : ""}
              `,
            style: {
              left: `${diff.x}px`,
              top: `${diff.y}px`,
              width: `${diff.width}px`,
              height: `${diff.height}px`
            }
          },
          diff.id
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mt-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-gray-800", children: message }),
      /* @__PURE__ */ jsxs("p", { className: "text-md text-gray-600", children: [
        "Diferencias encontradas: ",
        foundDifferences.length,
        " de ",
        differences.length
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-6", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: resetExercise,
        className: "px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors",
        children: "Reiniciar Ejercicio"
      }
    ) })
  ] });
}

const $$EjercicioDiferencias = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Ejercicio: Encuentra las Diferencias";
  const currentPage = 8;
  const totalPages = 12;
  const nextPage = "/capacitacion/ciberseguridad/role-play";
  const prevPage = "/capacitacion/ciberseguridad/ejercicio-arrastrar-soltar";
  return renderTemplate`${renderComponent($$result, "PresentacionLayout", $$PresentacionLayout, { "pageTitle": pageTitle, "currentPage": currentPage, "totalPages": totalPages, "nextPage": nextPage, "prevPage": prevPage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-4"> <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Ejercicio: Encuentra las Diferencias</h1> <p class="text-lg text-gray-700 text-center max-w-2xl">
Compara las dos imágenes y haz clic en las diferencias que encuentres.
</p> <div class="mt-8 w-full max-w-5xl"> ${renderComponent($$result2, "SpotTheDifference", SpotTheDifference, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ZERO/Documents/webesva/src/components/SpotTheDifference.jsx", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/ejercicio-diferencias.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/ejercicio-diferencias.astro";
const $$url = "/capacitacion/ciberseguridad/ejercicio-diferencias/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EjercicioDiferencias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
