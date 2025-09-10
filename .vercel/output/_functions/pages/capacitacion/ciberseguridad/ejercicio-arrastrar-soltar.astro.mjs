/* empty css                                        */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../../../chunks/PresentacionLayout_C6ZT1L6L.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../../../renderers.mjs';

const emailElements = [
  { id: "e1", text: 'Remitente: "soporte@banc0-seguro.com" (con un cero en lugar de una O)', type: "phishing" },
  { id: "e2", text: 'Asunto: "Actualización de Seguridad Urgente - ¡Actúe Ahora!" ', type: "phishing" },
  { id: "e3", text: 'Enlace: "https://www.bancoseguro.com/login" (URL oficial del banco)', type: "legitimo" },
  { id: "e4", text: 'Contenido: "Estimado cliente, hemos detectado actividad inusual en su cuenta. Haga clic aquí para verificar." ', type: "phishing" },
  { id: "e5", text: 'Remitente: "notificaciones@empresa-legitima.com" ', type: "legitimo" },
  { id: "e6", text: 'Asunto: "Confirmación de Pedido #12345" ', type: "legitimo" },
  { id: "e7", text: 'Enlace: "http://tinyurl.com/phishing-link" (URL acortada y sospechosa)', type: "phishing" },
  { id: "e8", text: 'Contenido: "Adjuntamos su factura del mes de marzo. Gracias por su preferencia." ', type: "legitimo" }
];
function DragAndDropPhishing() {
  const [elements, setElements] = useState(emailElements);
  const [droppedElements, setDroppedElements] = useState({ legitimo: [], phishing: [] });
  const [feedback, setFeedback] = useState({});
  const [showResults, setShowResults] = useState(false);
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("elementId", id);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, targetType) => {
    e.preventDefault();
    const elementId = e.dataTransfer.getData("elementId");
    const element = elements.find((el) => el.id === elementId);
    if (element) {
      setElements((prev) => prev.filter((el) => el.id !== elementId));
      setDroppedElements((prev) => ({
        ...prev,
        [targetType]: [...prev[targetType], element]
      }));
      setFeedback((prev) => ({
        ...prev,
        [elementId]: element.type === targetType ? "correct" : "incorrect"
      }));
    }
  };
  const checkResults = () => {
    setShowResults(true);
  };
  const resetExercise = () => {
    setElements(emailElements);
    setDroppedElements({ legitimo: [], phishing: [] });
    setFeedback({});
    setShowResults(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-lg shadow-lg space-y-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 text-center mb-6", children: "Clasifica los Elementos del Correo" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1 bg-gray-100 p-4 rounded-lg shadow-inner space-y-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-700 mb-3", children: "Elementos a Clasificar" }),
        elements.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "¡Todos los elementos han sido clasificados!" }),
        elements.map((el) => /* @__PURE__ */ jsx(
          "div",
          {
            draggable: true,
            onDragStart: (e) => handleDragStart(e, el.id),
            className: "cursor-grab bg-white p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow text-sm text-gray-800",
            children: el.text
          },
          el.id
        ))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            onDragOver: handleDragOver,
            onDrop: (e) => handleDrop(e, "legitimo"),
            className: "bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg p-4 min-h-[200px] flex flex-col items-center justify-center text-center space-y-3",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-blue-700 mb-3", children: "Correo Legítimo" }),
              droppedElements.legitimo.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Arrastra aquí los elementos legítimos." }),
              droppedElements.legitimo.map((el) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: `p-3 rounded-md shadow-sm text-sm text-gray-800 w-full
                  ${showResults ? feedback[el.id] === "correct" ? "bg-green-200 border-green-500" : "bg-red-200 border-red-500" : "bg-white border-gray-300"}
                  border`,
                  children: el.text
                },
                el.id
              ))
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            onDragOver: handleDragOver,
            onDrop: (e) => handleDrop(e, "phishing"),
            className: "bg-red-50 border-2 border-red-300 border-dashed rounded-lg p-4 min-h-[200px] flex flex-col items-center justify-center text-center space-y-3",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-red-700 mb-3", children: "Correo de Phishing" }),
              droppedElements.phishing.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Arrastra aquí los elementos de phishing." }),
              droppedElements.phishing.map((el) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: `p-3 rounded-md shadow-sm text-sm text-gray-800 w-full
                  ${showResults ? feedback[el.id] === "correct" ? "bg-green-200 border-green-500" : "bg-red-200 border-red-500" : "bg-white border-gray-300"}
                  border`,
                  children: el.text
                },
                el.id
              ))
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 mt-6", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: checkResults,
          className: "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50",
          disabled: elements.length > 0,
          children: "Ver Resultados"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: resetExercise,
          className: "px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors",
          children: "Reiniciar"
        }
      )
    ] }),
    showResults && /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800", children: "Resultados:" }),
      Object.values(feedback).every((res) => res === "correct") ? /* @__PURE__ */ jsx("p", { className: "text-green-600 text-lg", children: "¡Excelente! Has clasificado correctamente todos los elementos." }) : /* @__PURE__ */ jsx("p", { className: "text-red-600 text-lg", children: "Revisa los elementos marcados en rojo. ¡Sigue practicando!" })
    ] })
  ] });
}

const $$EjercicioArrastrarSoltar = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Ejercicio: Arrastrar y Soltar";
  const currentPage = 7;
  const totalPages = 12;
  const nextPage = "/capacitacion/ciberseguridad/ejercicio-diferencias";
  const prevPage = "/capacitacion/ciberseguridad/actividad-interactiva";
  return renderTemplate`${renderComponent($$result, "PresentacionLayout", $$PresentacionLayout, { "pageTitle": pageTitle, "currentPage": currentPage, "totalPages": totalPages, "nextPage": nextPage, "prevPage": prevPage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-4"> <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Ejercicio: Arrastrar y Soltar</h1> <p class="text-lg text-gray-700 text-center max-w-2xl">
Arrastra los elementos del correo electrónico a la categoría correcta (Legítimo o Phishing).
</p> <div class="mt-8 w-full max-w-4xl"> ${renderComponent($$result2, "DragAndDropPhishing", DragAndDropPhishing, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ZERO/Documents/webesva/src/components/DragAndDropPhishing.jsx", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/ejercicio-arrastrar-soltar.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/ejercicio-arrastrar-soltar.astro";
const $$url = "/capacitacion/ciberseguridad/ejercicio-arrastrar-soltar/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EjercicioArrastrarSoltar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
