import React from 'react';

export const FilterBTN = ({
  input,        // Label traducido que se muestra en el botón (ej: "Femenino")
  value,        // Valor que se envía a la API (ej: "female")
  index,
  name,         // "gender", "status", "species"
  task,         // Función para setear el valor en el store (ej: setGender)
  updatePageNumber,
}) => {

  const handleClick = () => {
    updatePageNumber(1);
    task(value);
  };

  return (
    <div>
      <input
        type="radio"
        name={name}
        id={`${name}-${value}-${index}`}
        className="hidden peer"
        onClick={handleClick}
      />
      <label
        htmlFor={`${name}-${value}-${index}`}
        className="peer-checked:bg-green-600 dark:peer-checked:bg-blue-500 peer-checked:text-white text-green-600 border dark:text-blue-600 border-green-600 dark:border-blue-600 px-4 py-2 rounded cursor-pointer transition-colors duration-200 block text-center"
      >
        {input}
      </label>
    </div>
  );
};
