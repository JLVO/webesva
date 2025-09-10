/* empty css                                        */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../../../chunks/PresentacionLayout_C6ZT1L6L.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../../../renderers.mjs';

const StarRating = ({ rating, setRating }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: () => setRating(star),
      className: `text-3xl focus:outline-none ${star <= rating ? "text-yellow-400" : "text-gray-300"}`,
      children: "★"
    },
    star
  )) });
};
const questions = [
  {
    id: "q1",
    question: '1. Un correo te pide hacer clic en un enlace para actualizar tus datos bancarios debido a un "problema de seguridad". El remitente parece ser tu banco, pero el correo tiene faltas de ortografía. ¿Qué haces?',
    type: "radio",
    options: [
      { value: "a", text: "Hago clic en el enlace; la seguridad es lo primero." },
      { value: "b", text: "Borro el correo y lo marco como spam. Luego, contacto a mi banco por los canales oficiales si tengo dudas." },
      { value: "c", text: "Respondo al correo pidiendo más información." }
    ],
    correctAnswer: "b",
    level: "Básico"
  },
  {
    id: "q2",
    question: "2. Recibes un email de un cliente importante con un archivo adjunto `.zip` llamado 'ContratoUrgente.zip' que no esperabas. ¿Cuál es la acción más segura?",
    type: "radio",
    options: [
      { value: "a", text: "Abrir el archivo para ver si es importante." },
      { value: "b", text: "Contactar al cliente por otro medio (ej. teléfono) para confirmar si realmente envió el archivo." },
      { value: "c", text: "Reenviar el correo al departamento de TI sin abrirlo." }
    ],
    correctAnswer: "b",
    level: "Básico"
  },
  {
    id: "q3",
    question: '3. ¿Qué es el "phishing"?',
    type: "radio",
    options: [
      { value: "a", text: "Un tipo de software antivirus." },
      { value: "b", text: "Una técnica para robar información personal y financiera haciéndose pasar por una entidad de confianza." },
      { value: "c", text: "Un método para mejorar la velocidad de internet." }
    ],
    correctAnswer: "b",
    level: "Básico"
  },
  {
    id: "q4",
    question: "4. ¿Cuál de las siguientes NO es una señal común de un correo de phishing?",
    type: "radio",
    options: [
      { value: "a", text: "Errores gramaticales y ortográficos." },
      { value: "b", text: "Solicitudes urgentes de información personal." },
      { value: "c", text: "Un saludo personalizado y profesional de una fuente conocida." }
    ],
    correctAnswer: "c",
    level: "Intermedio"
  },
  {
    id: "q5",
    question: '5. ¿Qué significa "spoofing" en el contexto de la ciberseguridad?',
    type: "radio",
    options: [
      { value: "a", text: "El proceso de cifrar datos para protegerlos." },
      { value: "b", text: "La falsificación de la identidad de un remitente o sitio web para engañar a los usuarios." },
      { value: "c", text: "La creación de copias de seguridad de archivos importantes." }
    ],
    correctAnswer: "b",
    level: "Intermedio"
  },
  {
    id: "q6",
    question: "6. ¿Por qué es importante usar la autenticación de dos factores (2FA)?",
    type: "radio",
    options: [
      { value: "a", text: "Para hacer que mi contraseña sea más fácil de recordar." },
      { value: "b", text: "Añade una capa extra de seguridad, requiriendo una segunda verificación además de la contraseña." },
      { value: "c", text: "Solo es útil para cuentas de redes sociales." }
    ],
    correctAnswer: "b",
    level: "Intermedio"
  },
  {
    id: "q7",
    question: "7. Si recibes un correo sospechoso que parece ser de un colega, ¿qué deberías hacer antes de responder o hacer clic en cualquier enlace?",
    type: "radio",
    options: [
      { value: "a", text: "Responder al correo preguntando si realmente lo envió." },
      { value: "b", text: "Llamar o contactar al colega por un canal diferente para verificar la autenticidad del correo." },
      { value: "c", text: "Asumir que es legítimo y proceder." }
    ],
    correctAnswer: "b",
    level: "Avanzado"
  },
  {
    id: "q8",
    question: "8. ¿Cuál es el riesgo principal de conectarse a redes Wi-Fi públicas no seguras?",
    type: "radio",
    options: [
      { value: "a", text: "La conexión a internet será más lenta." },
      { value: "b", text: "Los atacantes pueden interceptar fácilmente tus datos, incluyendo información sensible." },
      { value: "c", text: "Mi dispositivo se actualizará automáticamente sin mi permiso." }
    ],
    correctAnswer: "b",
    level: "Avanzado"
  },
  {
    id: "q9",
    question: "9. ¿Qué acción es la más efectiva para protegerse contra el ransomware?",
    type: "radio",
    options: [
      { value: "a", text: "Pagar el rescate inmediatamente si mis archivos son cifrados." },
      { value: "b", text: "Realizar copias de seguridad regulares y desconectadas de mis datos importantes." },
      { value: "c", text: "Instalar un solo antivirus y no actualizarlo." }
    ],
    correctAnswer: "b",
    level: "Super Avanzado"
  },
  {
    id: "q10",
    question: '10. ¿Qué es la "ingeniería social" en ciberseguridad?',
    type: "radio",
    options: [
      { value: "a", text: "El uso de software avanzado para hackear sistemas." },
      { value: "b", text: "La manipulación psicológica de personas para que realicen acciones o divulguen información confidencial." },
      { value: "c", text: "El diseño de interfaces de usuario amigables." }
    ],
    correctAnswer: "b",
    level: "Super Avanzado"
  }
];
function EvaluacionForm() {
  const initialFormData = {
    nombre: "",
    correoCorporativo: "",
    numeroCelular: "",
    empresa: "",
    cargo: "",
    calidadContenido: 0,
    claridadExpositor: 0,
    utilidadEjemplos: 0,
    loMasUtil: "",
    sugerencias: "",
    score: 0
    // Para almacenar la puntuación final
  };
  questions.forEach((q) => {
    initialFormData[q.id] = "";
  });
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [finalScore, setFinalScore] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es requerido.";
    if (!formData.correoCorporativo) newErrors.correoCorporativo = "El correo corporativo es requerido.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correoCorporativo)) newErrors.correoCorporativo = "Formato de correo inválido.";
    if (!formData.numeroCelular) newErrors.numeroCelular = "El número de celular es requerido.";
    if (!/^\d{9}$/.test(formData.numeroCelular)) newErrors.numeroCelular = "El número de celular debe tener 9 dígitos.";
    if (!formData.empresa) newErrors.empresa = "La empresa es requerida.";
    if (!formData.cargo) newErrors.cargo = "El cargo es requerido.";
    questions.forEach((q) => {
      if (!formData[q.id]) {
        newErrors[q.id] = "Esta pregunta es requerida.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("idle");
      return;
    }
    setStatus("submitting");
    let totalScore = 0;
    questions.forEach((q) => {
      if (formData[q.id] === q.correctAnswer) {
        totalScore += 2;
      }
    });
    const dataToSend = { ...formData, score: totalScore };
    try {
      const response = await fetch("/api/guardar-evaluacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend)
      });
      if (response.ok) {
        setFinalScore(totalScore);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  if (status === "success") {
    const maxScore = questions.length * 2;
    let scoreMessage = "";
    if (finalScore === maxScore) {
      scoreMessage = `¡Felicidades! Has obtenido ${finalScore} / ${maxScore} puntos. ¡Excelente! Eres un experto en ciberseguridad.`;
    } else if (finalScore >= maxScore * 0.8) {
      scoreMessage = `¡Muy bien! Has obtenido ${finalScore} / ${maxScore} puntos. Has estado muy atento(a).`;
    } else if (finalScore >= maxScore * 0.5) {
      scoreMessage = `Buen intento. Has obtenido ${finalScore} / ${maxScore} puntos. Hay áreas de mejora, ¡sigue practicando!`;
    } else {
      scoreMessage = `Necesitas repasar. Has obtenido ${finalScore} / ${maxScore} puntos. Te recomendamos revisar el material nuevamente.`;
    }
    return /* @__PURE__ */ jsxs("div", { className: "p-8 text-center bg-green-50 dark:bg-green-900 rounded-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-green-800 dark:text-green-200", children: "¡Evaluación Enviada!" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-300", children: scoreMessage }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600 dark:text-gray-300", children: "Muchas gracias por tu tiempo y feedback. Tu participación es muy valiosa para mejorar futuras capacitaciones." }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600 dark:text-gray-300", children: "¡Has completado exitosamente la jornada de ciberseguridad!" })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 dark:text-white mb-4", children: "Datos del Participante" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "nombre", className: "block text-sm font-medium text-gray-800 dark:text-white", children: "Nombre Completo" }),
          /* @__PURE__ */ jsx("input", { type: "text", name: "nombre", id: "nombre", value: formData.nombre, onChange: handleChange, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" }),
          errors.nombre && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.nombre })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "correoCorporativo", className: "block text-sm font-medium text-gray-800 dark:text-white", children: "Correo Corporativo" }),
          /* @__PURE__ */ jsx("input", { type: "email", name: "correoCorporativo", id: "correoCorporativo", value: formData.correoCorporativo, onChange: handleChange, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" }),
          errors.correoCorporativo && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.correoCorporativo })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "numeroCelular", className: "block text-sm font-medium text-gray-800 dark:text-white", children: "Número de Celular" }),
          /* @__PURE__ */ jsx("input", { type: "tel", name: "numeroCelular", id: "numeroCelular", value: formData.numeroCelular, onChange: handleChange, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" }),
          errors.numeroCelular && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.numeroCelular })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "empresa", className: "block text-sm font-medium text-gray-800 dark:text-white", children: "Empresa" }),
          /* @__PURE__ */ jsx("input", { type: "text", name: "empresa", id: "empresa", value: formData.empresa, onChange: handleChange, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" }),
          errors.empresa && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.empresa })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "cargo", className: "block text-sm font-medium text-gray-800 dark:text-white", children: "Cargo" }),
          /* @__PURE__ */ jsx("input", { type: "text", name: "cargo", id: "cargo", value: formData.cargo, onChange: handleChange, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" }),
          errors.cargo && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.cargo })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "dark:border-gray-600" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 dark:text-white", children: "Parte 1: Comprobación de Conocimientos" }),
      questions.map((q) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-gray-700 dark:text-gray-300", children: q.question }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 space-y-2", children: q.options.map((option) => /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: q.type,
              name: q.id,
              value: option.value,
              onChange: handleChange,
              checked: formData[q.id] === option.value,
              className: "h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "ml-3 text-gray-700 dark:text-gray-300", children: option.text })
        ] }, option.value)) }),
        errors[q.id] && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors[q.id] })
      ] }, q.id))
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "dark:border-gray-600" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 dark:text-white", children: "Parte 2: Feedback de la Capacitación" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-700 dark:text-gray-300", children: "Calidad general del contenido:" }),
        /* @__PURE__ */ jsx(StarRating, { rating: formData.calidadContenido, setRating: (value) => setFormData((prev) => ({ ...prev, calidadContenido: value })) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-700 dark:text-gray-300", children: "Claridad y dinamismo del expositor:" }),
        /* @__PURE__ */ jsx(StarRating, { rating: formData.claridadExpositor, setRating: (value) => setFormData((prev) => ({ ...prev, claridadExpositor: value })) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-700 dark:text-gray-300", children: "Utilidad de los ejemplos y la actividad:" }),
        /* @__PURE__ */ jsx(StarRating, { rating: formData.utilidadEjemplos, setRating: (value) => setFormData((prev) => ({ ...prev, utilidadEjemplos: value })) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "loMasUtil", className: "block font-medium text-gray-700 dark:text-gray-300", children: "¿Qué fue lo más útil que aprendiste?" }),
        /* @__PURE__ */ jsx("textarea", { name: "loMasUtil", id: "loMasUtil", rows: "3", value: formData.loMasUtil, onChange: handleChange, className: "mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "sugerencias", className: "block font-medium text-gray-700 dark:text-gray-300", children: "Sugerencias para mejorar futuras capacitaciones:" }),
        /* @__PURE__ */ jsx("textarea", { name: "sugerencias", id: "sugerencias", rows: "3", value: formData.sugerencias, onChange: handleChange, className: "mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("button", { type: "submit", disabled: status === "submitting", className: "inline-flex justify-center rounded-lg border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400", children: status === "submitting" ? "Enviando..." : "Enviar Evaluación" }),
      status === "error" && /* @__PURE__ */ jsx("p", { className: "mt-4 text-red-500", children: "Hubo un error al enviar la evaluación. Por favor, inténtalo de nuevo." })
    ] })
  ] });
}

const $$Evaluacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PresentacionLayout", $$PresentacionLayout, { "pageTitle": "Evaluaci\xF3n Final", "currentPage": 11, "totalPages": 12, "prevPage": "/capacitacion/ciberseguridad/buenas-practicas", "nextPage": "/capacitacion/ciberseguridad/conclusion" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-8"> <h1 class="text-4xl font-bold text-gray-800">Evaluación Final</h1> <p class="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
Por favor, completa este breve formulario. Tu feedback es esencial para medir la efectividad de esta capacitación y mejorar las futuras.
</p> </div> <div class="max-w-4xl mx-auto"> ${renderComponent($$result2, "EvaluacionForm", EvaluacionForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ZERO/Documents/webesva/src/components/EvaluacionForm.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/evaluacion.astro", void 0);

const $$file = "C:/Users/ZERO/Documents/webesva/src/pages/capacitacion/ciberseguridad/evaluacion.astro";
const $$url = "/capacitacion/ciberseguridad/evaluacion/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Evaluacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
