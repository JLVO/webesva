/* empty css                                        */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../../../chunks/PresentacionLayout_C6ZT1L6L.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../../../renderers.mjs';

const questions = [
  {
    id: 1,
    type: "email",
    sender: "soporte.bancario@mail-seguro.net",
    subject: "Acción requerida: su cuenta ha sido limitada",
    body: "Estimado cliente, hemos detectado actividad sospechosa en su cuenta. Por su seguridad, hemos limitado el acceso. Por favor, verifique su identidad inmediatamente haciendo clic aquí: http://banco-seguridad-online.info/verificar",
    correctAnswer: "Phishing",
    explanation: "El remitente y el enlace son sospechosos y no oficiales. Los bancos no piden verificar datos así."
  },
  {
    id: 2,
    type: "email",
    sender: "rrhh@empresa-inmobiliaria.com",
    subject: "Actualización de Política de Vacaciones",
    body: "Hola equipo, adjunto encontrarán el documento con la nueva política de vacaciones para el próximo año. Por favor, revísenlo. Saludos.",
    correctAnswer: "Seguro",
    explanation: "El remitente es interno y conocido, el asunto es relevante y no hay señales de urgencia o enlaces sospechosos."
  },
  {
    id: 3,
    type: "email",
    sender: "abogado@documentos-legales.online",
    subject: "FIRMA URGENTE: Contrato de Venta Inmueble",
    body: "Necesitamos su firma en el contrato de venta de la propiedad Ref: 843-B. El cliente quiere cerrar hoy. Acceda al portal de firmas a través de este enlace: http://firmadigital.web.app/portal",
    correctAnswer: "Phishing",
    explanation: 'El sentido de urgencia ("cerrar hoy") y un enlace a un portal de firmas no reconocido son grandes señales de alerta.'
  }
];
const QuizResults = ({ score, totalQuestions }) => {
  let result = {
    icon: "💪",
    title: "¡Buen comienzo!",
    message: "Sigue practicando para convertirte en un experto en ciberseguridad."
  };
  if (score === totalQuestions) {
    result = {
      icon: "🏆",
      title: "¡Maestro de la Ciberseguridad!",
      message: "¡Felicidades! Has detectado todas las amenazas correctamente."
    };
  } else if (score >= totalQuestions / 2) {
    result = {
      icon: "👀",
      title: "¡Muy bien hecho!",
      message: "Tienes un ojo agudo para los detalles. ¡Sigue así!"
    };
  }
  return /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: result.icon }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 dark:text-white", children: result.title }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-gray-600 dark:text-gray-300", children: "Tu puntuación final es:" }),
    /* @__PURE__ */ jsxs("p", { className: "my-2 text-4xl font-bold text-blue-600 dark:text-blue-400", children: [
      score,
      " de ",
      totalQuestions
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-gray-400", children: result.message })
  ] });
};
function QuizPhishing() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const showResults = currentQuestionIndex >= questions.length;
  const handleAnswer = (answer) => {
    if (selectedAnswer) return;
    const currentQuestion = questions[currentQuestionIndex];
    setSelectedAnswer(answer);
    setFeedback(currentQuestion.explanation);
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setFeedback("");
    setIsCorrect(null);
  };
  if (showResults) {
    return /* @__PURE__ */ jsx(QuizResults, { score, totalQuestions: questions.length });
  }
  const question = questions[currentQuestionIndex];
  return /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 border-b pb-2", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
        "De: ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700 dark:text-gray-200", children: question.sender })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
        "Asunto: ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700 dark:text-gray-200", children: question.subject })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-6 text-gray-700 dark:text-gray-300", children: question.body }),
    !selectedAnswer && /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-4", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => handleAnswer("Seguro"), className: "px-8 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75", children: "Seguro" }),
      /* @__PURE__ */ jsx("button", { onClick: () => handleAnswer("Phishing"), className: "px-8 py-3 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75", children: "Phishing" })
    ] }),
    selectedAnswer && /* @__PURE__ */ jsxs("div", { className: `mt-6 p-4 rounded-lg ${isCorrect ? "bg-green-100 dark:bg-green-900 border border-green-300" : "bg-red-100 dark:bg-red-900 border border-red-300"}`, children: [
      /* @__PURE__ */ jsx("h3", { className: `font-bold ${isCorrect ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`, children: isCorrect ? "¡Correcto!" : "Incorrecto" }),
      /* @__PURE__ */ jsx("p", { className: `mt-2 text-sm ${isCorrect ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`, children: feedback }),
      /* @__PURE__ */ jsx("button", { onClick: handleNext, className: "mt-4 px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500", children: "Siguiente" })
    ] })
  ] });
}

const $$ActividadInteractiva = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PresentacionLayout", $$PresentacionLayout, { "pageTitle": "Actividad Interactiva", "currentPage": 6, "totalPages": 12, "prevPage": "/capacitacion/ciberseguridad/que-es-spoofing", "nextPage": "/capacitacion/ciberseguridad/ejercicio-arrastrar-soltar" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> <h1 class="text-4xl font-bold text-gray-800">Actividad: ¿Seguro o Phishing?</h1> <p class="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
Analiza los siguientes correos electrónicos y decide si son seguros o un intento de phishing. ¡Presta atención a los detalles!
</p> </div> <div class="mt-8 max-w-4xl mx-auto"> ${renderComponent($$result2, "QuizPhishing", QuizPhishing, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ZERO/Documents/webesva/src/components/QuizPhishing.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/actividad-interactiva.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/actividad-interactiva.astro";
const $$url = "/capacitacion/ciberseguridad/actividad-interactiva/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ActividadInteractiva,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
