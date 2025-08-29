import React, { useState } from 'react';

// Define differences as areas on the image
// For simplicity, these are hardcoded. In a real app, you might load them from data.
const differences = [
  { id: 'd1', x: 57, y: 0, width: 200, height: 20, description: 'URL sospechosa' },
  { id: 'd2', x: 20, y: 0, width: 35, height: 20, description: 'Falta de candado de seguridad' },
  { id: 'd3', x: 70, y: 23, width: 80, height: 20, description: 'Error ortográfico en el texto' },
];

export default function SpotTheDifference() {
  const [foundDifferences, setFoundDifferences] = useState([]);
  const [message, setMessage] = useState('');

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let clickedOnDifference = false;
    let newFoundDifferences = [...foundDifferences]; // Create a mutable copy
    let currentMessage = '';

    for (const diff of differences) {
      if (x >= diff.x && x <= diff.x + diff.width && y >= diff.y && y <= diff.y + diff.height) {
        clickedOnDifference = true;
        if (!newFoundDifferences.includes(diff.id)) {
          newFoundDifferences.push(diff.id);
          currentMessage = `¡Encontraste una diferencia! ${diff.description}`;
        } else {
          currentMessage = `Ya encontraste esta diferencia: ${diff.description}`;
        }
        break; // Only process one difference per click
      }
    }

    if (!clickedOnDifference) {
      currentMessage = 'No hay diferencia aquí. ¡Sigue buscando!';
    }

    setFoundDifferences(newFoundDifferences); // Update state once
    setMessage(currentMessage); // Set message based on immediate outcome

    // Check if all differences are found after this click
    if (newFoundDifferences.length === differences.length) {
      setMessage('¡Felicidades! Has encontrado todas las diferencias.');
    }
  };

  const resetExercise = () => {
    setFoundDifferences([]);
    setMessage('');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Encuentra las Diferencias en la Página de Login</h2>
      <p className="text-gray-700 text-center mb-4">Haz clic en las áreas de la imagen de la derecha que creas que son diferentes o sospechosas.</p>

      <div className="flex justify-center gap-4">
        {/* Imagen Legítima */}
        <div className="relative border-2 border-gray-300 rounded-lg overflow-hidden">
          <img src="/imagenes/login-legitimo.webp" alt="Página de Login Legítima" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-xl font-bold">
            Página Legítima
          </div>
        </div>

        {/* Imagen con Diferencias (Clickable) */}
        <div className="relative border-2 border-blue-500 rounded-lg overflow-hidden cursor-pointer" onClick={handleClick}>
          <img src="/imagenes/login-phishing.webp" alt="Página de Login con Diferencias" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-blue-800 bg-opacity-50 text-white text-xl font-bold">
            Página con Diferencias
          </div>
          {differences.map(diff => (
            <div
              key={diff.id}
              className={`absolute border-2 border-transparent rounded-md
                ${foundDifferences.includes(diff.id) ? 'border-green-500 bg-green-500 bg-opacity-30' : ''}
              `}
              style={{
                left: `${diff.x}px`,
                top: `${diff.y}px`,
                width: `${diff.width}px`,
                height: `${diff.height}px`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-lg font-semibold text-gray-800">{message}</p>
        <p className="text-md text-gray-600">Diferencias encontradas: {foundDifferences.length} de {differences.length}</p>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={resetExercise}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
        >
          Reiniciar Ejercicio
        </button>
      </div>
    </div>
  );
}
