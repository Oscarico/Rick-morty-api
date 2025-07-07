// src/components/filter/Filter.jsx
import React from 'react';
import { Status } from './category/Status';
import { Species } from './category/Species';
import { Gender } from './category/Gender';
import { useApiStore } from '../../store/ApiStore';
import { useTranslation } from 'react-i18next';

export const Filter = () => {
  const {
    clearFilters,
    setStatus,
    setSpecies,
    setGender,
    setPageNumber,
  } = useApiStore();

  const {t} = useTranslation();

  return (
    <div className="space-y-4 w-full">
      <h2 className="text-xl font-bold text-center dark:text-white">{t("filter_title")}</h2>

      <button
        onClick={clearFilters}
        className="text-green-600 dark:text-blue-500 underline hover:text-green-800 dark:hover:text-blue-700 transition-colors cursor-pointer"
      >
        {t("filter_clean")}
      </button>

      <Status updateStatus={setStatus} updatePageNumber={setPageNumber} />
      <Species updateSpecies={setSpecies} updatePageNumber={setPageNumber} />
      <Gender updateGender={setGender} updatePageNumber={setPageNumber} />
    </div>
  );
};
