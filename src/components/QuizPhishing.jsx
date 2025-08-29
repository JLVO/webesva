import React, { useState } from 'react';

// --- Datos del Quiz ---
const questions = [
  {
    id: 1,
    type: 'email',
    sender: 'soporte.bancario@mail-seguro.net',
    subject: 'Acción requerida: su cuenta ha sido limitada',
    body: 'Estimado cliente, hemos detectado actividad sospechosa en su cuenta. Por su seguridad, hemos limitado el acceso. Por favor, verifique su identidad inmediatamente haciendo clic aquí: http://banco-seguridad-online.info/verificar',
    correctAnswer: 'Phishing',
    explanation: 'El remitente y el enlace son sospechosos y no oficiales. Los bancos no piden verificar datos así.'
  },
  {
    id: 2,
    type: 'email',
    sender: 'rrhh@empresa-inmobiliaria.com',
    subject: 'Actualización de Política de Vacaciones',
    body: 'Hola equipo, adjunto encontrarán el documento con la nueva política de vacaciones para el próximo año. Por favor, revísenlo. Saludos.',
    correctAnswer: 'Seguro',
    explanation: 'El remitente es interno y conocido, el asunto es relevante y no hay señales de urgencia o enlaces sospechosos.'
  },
  {
    id: 3,
    type: 'email',
    sender: 'abogado@documentos-legales.online',
    subject: 'FIRMA URGENTE: Contrato de Venta Inmueble',
    body: 'Necesitamos su firma en el contrato de venta de la propiedad Ref: 843-B. El cliente quiere cerrar hoy. Acceda al portal de firmas a través de este enlace: http://firmadigital.web.app/portal',
    correctAnswer: 'Phishing',
    explanation: 'El sentido de urgencia ("cerrar hoy") y un enlace a un portal de firmas no reconocido son grandes señales de alerta.'
  },
];

// --- Componente de Resultados con Gamificación ---
const QuizResults = ({ score, totalQuestions }) => {
  let result = {
    icon: '💪',
    title: '¡Buen comienzo!',
    message: 'Sigue practicando para convertirte en un experto en ciberseguridad.'
  };

  if (score === totalQuestions) {
    result = {
      icon: '🏆',
      title: '¡Maestro de la Ciberseguridad!',
      message: '¡Felicidades! Has detectado todas las amenazas correctamente.'
    }
  } else if (score >= totalQuestions / 2) {
    result = {
      icon: '👀',
      title: '¡Muy bien hecho!',
      message: 'Tienes un ojo agudo para los detalles. ¡Sigue así!'
    }
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
      <div className="text-6xl mb-4">{result.icon}</div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{result.title}</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Tu puntuación final es:</p>
      <p className="my-2 text-4xl font-bold text-blue-600 dark:text-blue-400">{score} de {totalQuestions}</p>
      <p className="text-gray-500 dark:text-gray-400">{result.message}</p>
    </div>
  );
};


// --- Componente Principal del Quiz ---
export default function QuizPhishing() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const showResults = currentQuestionIndex >= questions.length;

  const handleAnswer = (answer) => {
    if (selectedAnswer) return; // Evita múltiples respuestas

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
    setFeedback('');
    setIsCorrect(null);
  };

  if (showResults) {
    return <QuizResults score={score} totalQuestions={questions.length} />;
  }

  const question = questions[currentQuestionIndex];

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Encabezado del Correo Simulado */}
      <div className="mb-4 border-b pb-2">
        <p className="text-sm text-gray-500 dark:text-gray-400">De: <span className="font-medium text-gray-700 dark:text-gray-200">{question.sender}</span></p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Asunto: <span className="font-medium text-gray-700 dark:text-gray-200">{question.subject}</span></p>
      </div>
      
      {/* Cuerpo del Correo */}
      <div className="mb-6 text-gray-700 dark:text-gray-300">
        {question.body}
      </div>

      {/* Botones de Respuesta */}
      {!selectedAnswer && (
        <div className="flex justify-center space-x-4">
          <button onClick={() => handleAnswer('Seguro')} className="px-8 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Seguro
          </button>
          <button onClick={() => handleAnswer('Phishing')} className="px-8 py-3 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
            Phishing
          </button>
        </div>
      )}

      {/* Retroalimentación */}
      {selectedAnswer && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-100 dark:bg-green-900 border border-green-300' : 'bg-red-100 dark:bg-red-900 border border-red-300'}`}>
          <h3 className={`font-bold ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
            {isCorrect ? '¡Correcto!' : 'Incorrecto'}
          </h3>
          <p className={`mt-2 text-sm ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
            {feedback}
          </p>
          <button onClick={handleNext} className="mt-4 px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500">
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}