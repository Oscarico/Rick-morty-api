// src/components/ui/toggles/ToggleTranslation.jsx
import React from 'react';
import { useLanguageStore } from '../../../store/LanguageStore';

export const ToggleTranslation = () => {
  const { language, setLanguage } = useLanguageStore();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-green-500 dark:bg-blue-500 text-white px-3 py-1 rounded hover:bg-green-700 dark:hover:bg-blue-700 transition"
    >
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};
