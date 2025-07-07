// src/store/LanguageStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../i18';


export const useLanguageStore = create(
  persist(
    (set) => ({
      language: i18n.language || 'es',
      setLanguage: (lng) => {
        i18n.changeLanguage(lng); // cambia el idioma en i18n
        set({ language: lng });
      },
    }),
    {
      name: 'app-language', // clave en localStorage
    }
  )
);
