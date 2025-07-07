import React, { useState } from 'react';
import { FilterBTN } from '../FilterBtn';
import { useTranslation } from 'react-i18next';

export const Gender = ({ updateGender, updatePageNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  // Traducción visible (label) + valor real para la API (value)
  const genders = [
    { value: 'female', label: t("filter_gender_female") },
    { value: 'male', label: t("filter_gender_male") },
    { value: 'genderless', label: t("filter_gender_genderless") },
    { value: 'unknown', label: t("filter_gender_unknown") },
  ];

  return (
    <div className="border rounded mb-4 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left font-medium text-gray-900 dark:text-white"
      >
        <span>{t("filter_gender_title")}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Body */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden px-4`}>
        <div className="py-4 flex flex-wrap gap-3">
          {genders.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="gender"
              value={item.value} // valor API
              input={item.label} // texto traducido visible
              task={updateGender}
              updatePageNumber={updatePageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
