import React, { useState } from 'react'
import { FilterBTN } from '../FilterBtn';
import { useTranslation } from 'react-i18next';

export const Species = ({ updateSpecies, updatePageNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {t} = useTranslation();

  const human = t("filter_species_human");
  const alien = t("filter_species_alien");
  const humanoid = t("filter_species_humanoid");
  const poopybutthole = t("filter_species_poopybutthole");
  const mythological = t("filter_species_mythological");
  const unknown = t("filter_species_unknown");
  const animal = t("filter_species_animal");
  const disease = t("filter_species_disease");
  const robot = t("filter_species_robot");
  const cronenberg = t("filter_species_cronenberg");
  const planet = t("filter_species_planet");

  const species = [
    {value: 'human', label: human},
    {value: 'alien', label: alien},
    {value: 'humanoid', label: humanoid},
    {value: 'poopybutthole', label: poopybutthole},
    {value: 'mythological', label: mythological},
    {value: 'unknown', label: unknown},
    {value: 'animal', label: animal},
    {value: 'disease', label: disease},
    {value: 'robot', label: robot},
    {value: 'cronenberg', label: cronenberg},
    {value: 'planet', label: planet},
  ];

  return (
    <div className="border rounded mb-4 overflow-hidden">
      {/* Encabezado */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left font-medium text-gray-900 dark:text-white"
      >
        <span>{t("filter_species_title")}</span>
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
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        } overflow-hidden px-4`}
      >
        <div className="flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterBTN
              name={index}
              index={index}
              key={index}
              value={item.value} // valor API
              input={item.label}
              updatePageNumber={updatePageNumber}
              task={updateSpecies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
