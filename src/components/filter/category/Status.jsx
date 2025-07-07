import React, { useState } from 'react'
import { FilterBTN } from '../FilterBtn';
import { useTranslation } from 'react-i18next';

export const Status = ({ updateStatus, updatePageNumber }) => {
  const [isOpen, setIsOpen] = useState(true); // Abierto por defecto
  const {t} = useTranslation();

  const alive = t("filter_status_alive");
  const dead = t("filter_status_dead");
  const unknown = t("filter_status_unknown");

  const status = [
    {value: 'alive', label: alive}, 
    {value: 'dead', label: dead}, 
    {value: 'unknown', label: unknown}
  ];

  return (
    <div className="border rounded mb-4 overflow-hidden">
      {/* Encabezado */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left font-medium text-gray-900 dark:text-white"
      >
        <span>{t("filter_status_title")}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Cuerpo */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 py-4" : "max-h-0 py-0"
        } overflow-hidden px-4`}
      >
        <div className="flex flex-wrap gap-3">
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name={index}
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              value={item.value} // valor API
              input={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

