import React from 'react'

export const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="w-full mb-4">
      <select
        onChange={(e) => changeID(e.target.value)}
        id={name}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
      >
        <option value="1">Escoge...</option>
        {[...Array(total).keys()].map((x, index) => (
          <option key={index} value={x + 1}>
            {name} - {x + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

