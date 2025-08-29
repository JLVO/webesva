import React, { useState } from 'react';

const emailElements = [
  { id: 'e1', text: 'Remitente: "soporte@banc0-seguro.com" (con un cero en lugar de una O)', type: 'phishing' },
  { id: 'e2', text: 'Asunto: "Actualización de Seguridad Urgente - ¡Actúe Ahora!" ', type: 'phishing' },
  { id: 'e3', text: 'Enlace: "https://www.bancoseguro.com/login" (URL oficial del banco)', type: 'legitimo' },
  { id: 'e4', text: 'Contenido: "Estimado cliente, hemos detectado actividad inusual en su cuenta. Haga clic aquí para verificar." ', type: 'phishing' },
  { id: 'e5', text: 'Remitente: "notificaciones@empresa-legitima.com" ', type: 'legitimo' },
  { id: 'e6', text: 'Asunto: "Confirmación de Pedido #12345" ', type: 'legitimo' },
  { id: 'e7', text: 'Enlace: "http://tinyurl.com/phishing-link" (URL acortada y sospechosa)', type: 'phishing' },
  { id: 'e8', text: 'Contenido: "Adjuntamos su factura del mes de marzo. Gracias por su preferencia." ', type: 'legitimo' },
];

export default function DragAndDropPhishing() {
  const [elements, setElements] = useState(emailElements);
  const [droppedElements, setDroppedElements] = useState({ legitimo: [], phishing: [] });
  const [feedback, setFeedback] = useState({}); // { elementId: 'correct' | 'incorrect' }
  const [showResults, setShowResults] = useState(false);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('elementId', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetType) => {
    e.preventDefault();
    const elementId = e.dataTransfer.getData('elementId');
    const element = elements.find(el => el.id === elementId);

    if (element) {
      // Remove from original list
      setElements(prev => prev.filter(el => el.id !== elementId));

      // Add to dropped list
      setDroppedElements(prev => ({
        ...prev,
        [targetType]: [...prev[targetType], element]
      }));

      // Provide immediate feedback
      setFeedback(prev => ({
        ...prev,
        [elementId]: element.type === targetType ? 'correct' : 'incorrect'
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

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Clasifica los Elementos del Correo</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Elementos Arrastrables */}
        <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg shadow-inner space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Elementos a Clasificar</h3>
          {elements.length === 0 && <p className="text-gray-500 text-sm">¡Todos los elementos han sido clasificados!</p>}
          {elements.map(el => (
            <div
              key={el.id}
              draggable
              onDragStart={(e) => handleDragStart(e, el.id)}
              className="cursor-grab bg-white p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow text-sm text-gray-800"
            >
              {el.text}
            </div>
          ))}
        </div>

        {/* Zonas de Soltar */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'legitimo')}
            className="bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg p-4 min-h-[200px] flex flex-col items-center justify-center text-center space-y-3"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-3">Correo Legítimo</h3>
            {droppedElements.legitimo.length === 0 && <p className="text-gray-500 text-sm">Arrastra aquí los elementos legítimos.</p>}
            {droppedElements.legitimo.map(el => (
              <div
                key={el.id}
                className={`p-3 rounded-md shadow-sm text-sm text-gray-800 w-full
                  ${showResults ? (feedback[el.id] === 'correct' ? 'bg-green-200 border-green-500' : 'bg-red-200 border-red-500') : 'bg-white border-gray-300'}
                  border`}
              >
                {el.text}
              </div>
            ))}
          </div>

          <div
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'phishing')}
            className="bg-red-50 border-2 border-red-300 border-dashed rounded-lg p-4 min-h-[200px] flex flex-col items-center justify-center text-center space-y-3"
          >
            <h3 className="text-lg font-semibold text-red-700 mb-3">Correo de Phishing</h3>
            {droppedElements.phishing.length === 0 && <p className="text-gray-500 text-sm">Arrastra aquí los elementos de phishing.</p>}
            {droppedElements.phishing.map(el => (
              <div
                key={el.id}
                className={`p-3 rounded-md shadow-sm text-sm text-gray-800 w-full
                  ${showResults ? (feedback[el.id] === 'correct' ? 'bg-green-200 border-green-500' : 'bg-red-200 border-red-500') : 'bg-white border-gray-300'}
                  border`}
              >
                {el.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={checkResults}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          disabled={elements.length > 0}
        >
          Ver Resultados
        </button>
        <button
          onClick={resetExercise}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
        >
          Reiniciar
        </button>
      </div>

      {showResults && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-gray-800">Resultados:</h3>
          {Object.values(feedback).every(res => res === 'correct') ? (
            <p className="text-green-600 text-lg">¡Excelente! Has clasificado correctamente todos los elementos.</p>
          ) : (
            <p className="text-red-600 text-lg">Revisa los elementos marcados en rojo. ¡Sigue practicando!</p>
          )}
        </div>
      )}
    </div>
  );
}
