// src/components/search/Search.jsx

import React, { useState } from 'react';
import { useApiStore } from '../../store/ApiStore';
import { useTranslation } from 'react-i18next';

export const Search = () => {
  const { setSearch, setPageNumber } = useApiStore();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageNumber(1);
    setSearch(inputValue); // solo se actualiza al presionar el botón o Enter
  };

  const {t} = useTranslation();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full px-4"
    >
      <input
        type="text"
        placeholder={t("search_placeholder")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-5 py-2 rounded-3xl hover:bg-green-900 dark:bg-blue-500 dark:hover:bg-blue-900 transition-colors cursor-pointer"
      >
        {t("search_btn")}
      </button>
    </form>
  );
};
