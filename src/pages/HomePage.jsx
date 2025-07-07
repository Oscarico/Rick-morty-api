// src/pages/HomePage.jsx
import { useEffect } from "react";
import { Pagination } from "../components/pagination/Pagination";
import { Search } from "../components/search/Search";
import { Card } from "../components/card/Card";
import { useApiStore } from "../store/ApiStore";
import { useApiStack } from "../stack/ApiStack";
import { Filter } from "../components/filter/Filter";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { pageNumber, setPageNumber } = useApiStore();
  const { data, isLoading, error } = useApiStack();

  const {t} = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Rick & Morty | Characters";
  }, [pageNumber]);

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <p className="text-xl font-semibold animate-pulse dark:text-white">Cargando personajes...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error al cargar datos</p>;
  }

  const { results, info } = data;

  return (
        <div className="px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-center dark:text-white">{t("menu_characters")}</h1>
        
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/4">
              <Filter />
            </div>
            <div className="w-full lg:w-3/4">
              <Search />

        <Card results={results} />

        <Pagination info={info} pageNumber={pageNumber} updatePageNumber={setPageNumber} />
            </div>
          </div>
        </div>
  );
};
